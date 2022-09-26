import { Route, Routes } from "react-router-dom";
import React from "react";
import Main from "./layout/Main";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DevicePage from "./pages/DevicePage";
import FeedbackPage from "./pages/FeedbackPage";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import ProjectPage from "./pages/ProjectPage";
import ScrollToTop from "./utils/ScrollToTop";

// const HomePage = React.lazy(() => {
//   import("./pages/HomePage");
// });
// const Main = React.lazy(() => {
//   import("./layout/Main");
// });
// const AboutPage = React.lazy(() => {
//   import("./pages/AboutPage");
// });
// const ContactPage = React.lazy(() => {
//   import("./pages/ContactPage");
// });
// const DevicePage = React.lazy(() => {
//   import("./pages/DevicePage");
// });
// const FeedbackPage = React.lazy(() => {
//   import("./pages/FeedbackPage");
// });
// const Product = React.lazy(() => {
//   import("./pages/Product");
// });
// const ProjectPage = React.lazy(() => {
//   import("./pages/ProjectPage");
// });

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/project" element={<ProjectPage />}></Route>
          <Route path="/device" element={<DevicePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/feedback" element={<FeedbackPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/product/:id" element={<Product />}></Route>
        </Route>
      </Routes>
    </ScrollToTop>
  );
}

export default App;
