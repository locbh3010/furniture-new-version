import { Route, Routes } from "react-router-dom";
import React from "react";
import Main from "./layout/Main";
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";
// import DevicePage from "./pages/DevicePage";
// import FeedbackPage from "./pages/FeedbackPage";
// import HomePage from "./pages/HomePage";
// import Product from "./pages/Product";
// import ProjectPage from "./pages/ProjectPage";
import ScrollToTop from "./utils/ScrollToTop";
import PageNotFound from "./pages/PageNotFound";
import Loading from "./pages/Loading";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const DevicePage = React.lazy(() => import("./pages/DevicePage"));
const ProjectPage = React.lazy(() => import("./pages/ProjectPage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const Product = React.lazy(() => import("./pages/Product"));

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
            {/* <Route path="/feedback" element={<FeedbackPage />}></Route> */}
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/product/:id" element={<Product />}></Route>
          </Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </React.Suspense>
    </ScrollToTop>
  );
}

export default App;
