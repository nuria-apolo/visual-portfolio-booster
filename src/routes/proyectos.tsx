import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/proyectos")({
  component: ProjectsLayout,
});

function ProjectsLayout() {
  return <Outlet />;
}
