import { StrictMode, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./screens/Home";
import { About } from "./screens/About";
import { Projects } from "./screens/Projects";
import { Theory } from "./screens/Theory";
import { Contact } from "./screens/Contact";

const rootElement = document.getElementById("app") as HTMLElement;

if (rootElement) {
  const app = (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/projects"
            element={
              <Layout>
                <Projects />
              </Layout>
            }
          />
          <Route
            path="/theory"
            element={
              <Layout>
                <Theory />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  ) as React.ReactNode;

  createRoot(rootElement).render(app as unknown as any);
}