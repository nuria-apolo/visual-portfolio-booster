type AcceptEntry = {
  position: number;
  q: number;
  specificity: number;
  type: string;
};

function parseAccept(header: string): AcceptEntry[] {
  return header
    .split(",")
    .map((raw, position) => {
      const [rawType, ...rawParams] = raw.split(";");
      const type = rawType.trim().toLowerCase();
      if (!type) return null;

      let q = 1;
      for (const rawParam of rawParams) {
        const [rawName, rawValue] = rawParam.split("=");
        if (rawName?.trim().toLowerCase() !== "q") continue;
        const parsed = Number(rawValue?.trim());
        if (!Number.isNaN(parsed)) q = Math.max(0, Math.min(1, parsed));
      }

      const specificity = type === "*/*" ? 0 : type.endsWith("/*") ? 1 : 2;
      return { position, q, specificity, type };
    })
    .filter((entry): entry is AcceptEntry => entry !== null);
}

function matches(entry: AcceptEntry, candidate: string): boolean {
  if (entry.type === "*/*") return true;
  if (entry.type.endsWith("/*")) return candidate.startsWith(entry.type.slice(0, -1));
  return entry.type === candidate;
}

export function preferredRepresentation(
  header: string | null,
  available: readonly string[],
): string | null {
  if (!header) return available[0] ?? null;

  const entries = parseAccept(header);
  if (entries.length === 0) return available[0] ?? null;

  let bestType: string | null = null;
  let bestQ = -1;
  let bestPosition = Number.POSITIVE_INFINITY;

  for (const candidate of available) {
    let matched: AcceptEntry | null = null;

    for (const entry of entries) {
      if (!matches(entry, candidate)) continue;
      if (
        matched === null ||
        entry.specificity > matched.specificity ||
        (entry.specificity === matched.specificity && entry.position < matched.position)
      ) {
        matched = entry;
      }
    }

    if (!matched || matched.q <= 0) continue;
    if (matched.q > bestQ || (matched.q === bestQ && matched.position < bestPosition)) {
      bestType = candidate;
      bestQ = matched.q;
      bestPosition = matched.position;
    }
  }

  return bestType;
}

export function appendVary(headers: Headers, value: string): void {
  const existing = headers.get("Vary");
  if (!existing) {
    headers.set("Vary", value);
    return;
  }

  const tokens = existing.split(",").map((token) => token.trim().toLowerCase());
  if (!tokens.includes(value.toLowerCase())) headers.set("Vary", `${existing}, ${value}`);
}
