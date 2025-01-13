import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";
import { HomePage } from "./home-page.tsx";
import { SolarSystem } from "./solar-system.ts";

const solarSystem = new SolarSystem();

solarSystem.setup();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HomePage {...solarSystem} />
  </StrictMode>
);
