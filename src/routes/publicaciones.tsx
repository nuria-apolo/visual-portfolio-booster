import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/publicaciones")({
  component: () => <Outlet />,
});
