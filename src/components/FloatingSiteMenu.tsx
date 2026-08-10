import { useRouterState } from "@tanstack/react-router";

const siteMenuItems = [
  { label: "Inicio", href: "/" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Publicaciones", href: "/publicaciones" },
] as const;

export function FloatingSiteMenu() {
  const location = useRouterState({ select: (state) => state.location });

  return (
    <nav className="site-float-menu" aria-label="Navegación principal">
      <ul className="site-float-menu-list">
        {siteMenuItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <li key={item.label}>
              <a
                href={item.href}
                className={`site-float-menu-link ${isActive ? "is-active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
