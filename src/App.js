import { Route, Routes } from "react-router-dom";
import React from "react";
import Main from "./layout/Main";

import ScrollToTop from "./utils/ScrollToTop";
import PageNotFound from "./pages/PageNotFound";
import Loading from "./pages/Loading";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const DevicePage = React.lazy(() => import("./pages/DevicePage"));
const ProjectPage = React.lazy(() => import("./pages/ProjectPage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const Product = React.lazy(() => import("./pages/Product"));
const InteriorPage = React.lazy(() => import("./pages/InteriorPage"));
const Blogs = React.lazy(() => import("./pages/Blogs"));
const Blog = React.lazy(() => import("./pages/Blog"));

function App() {
  return (
    <ScrollToTop>
      <React.Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/project" element={<ProjectPage />}></Route>
            <Route path="/device" element={<DevicePage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/product/:id" element={<Product />}></Route>
            <Route path="/interior" element={<InteriorPage />}></Route>
            <Route path="/blogs" element={<Blogs />}></Route>
            <Route path="/blog/:id" element={<Blog />}></Route>
          </Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </React.Suspense>
    </ScrollToTop>
  );
}

export default App;
