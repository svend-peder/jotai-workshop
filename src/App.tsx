import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

const RoutedApp = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default RoutedApp;
