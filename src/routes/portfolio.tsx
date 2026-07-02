import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "./index";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio privado — Srta Serifa" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Portfolio,
});
