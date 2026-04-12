import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import { HomePage, NotFoundPage, CaseStudyPage, CaseStudy } from "../pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="case-studies" index element={<CaseStudyPage />} />
      <Route path="case-studies/:slug" element={<CaseStudy />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);

export default router;
