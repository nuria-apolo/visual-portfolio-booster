import { useEffect, useState } from "react";

export type ProjectNavigationItem = {
  id: string;
  label: string;
};

export function ProjectSectionNavigation({ items }: { items: ProjectNavigationItem[] }) {
  const [activeSectionId, setActiveSectionId] = useState(items[0]?.id ?? "");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateNavigation = () => {
      const sections = items
        .map((item) => document.getElementById(item.id))
        .filter((section): section is HTMLElement => Boolean(section));
      const firstSection = sections[0];
      const lastSection = sections.at(-1);
      if (!firstSection || !lastSection) return;

      const activationLine = window.innerHeight * 0.42;
      const activeSection = [...sections]
        .reverse()
        .find((section) => section.getBoundingClientRect().top <= activationLine);

      if (activeSection) setActiveSectionId(activeSection.id);
      setIsVisible(
        firstSection.getBoundingClientRect().top <= activationLine
        && lastSection.getBoundingClientRect().bottom > window.innerHeight * 0.25,
      );
    };

    updateNavigation();
    window.addEventListener("scroll", updateNavigation, { passive: true });
    window.addEventListener("resize", updateNavigation);
    return () => {
      window.removeEventListener("scroll", updateNavigation);
      window.removeEventListener("resize", updateNavigation);
    };
  }, [items]);

  if (!isVisible) return null;

  return (
    <nav className="project-section-index-fixed" aria-label="Índice del proyecto">
      {items.map((item) => (
        <a key={item.id} href={`#${item.id}`} className={item.id === activeSectionId ? "is-active" : ""}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export function ProjectSectionAnchor({
  activeId,
  items,
}: {
  activeId: string;
  items: ProjectNavigationItem[];
}) {
  const activeLabel = items.find((item) => item.id === activeId)?.label ?? "Índice";

  return (
    <>
      <span className="section-anchor-nav-slot" aria-hidden="true" />
      <details className="section-anchor-nav-mobile">
        <summary>
          <span>{activeLabel}</span>
          <span aria-hidden="true">⌄</span>
        </summary>
        <nav aria-label="Índice del proyecto">
          {items.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={item.id === activeId ? "is-active" : ""}>
              {item.label}
            </a>
          ))}
        </nav>
      </details>
    </>
  );
}
