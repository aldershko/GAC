import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./components/HomePage";
import ServicesPage from "./components/ServicesPage";
import ClientsPage from "./components/ClientsPage";
import ContactPage from "./components/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/clients",
    element: <ClientsPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

const App = () => {
  return (
    <div className="min-h-screen font-poppins bg-white min-w-screen">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
