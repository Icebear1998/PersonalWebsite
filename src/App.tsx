import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import BlogsPage from "./pages/BlogsPage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPost from "./pages/BlogPost";
import Layout from "./components/layout/Layout";
import routes from "tempo-routes";
import SupabaseTest from "./components/SupabaseTest";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Layout>
          <SupabaseTest />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route
              path="/projects/:id"
              element={
                <div className="p-8">
                  <h1 className="text-2xl font-bold">Project Details</h1>
                  <p>Project details page coming soon...</p>
                </div>
              }
            />
          </Routes>
        </Layout>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
