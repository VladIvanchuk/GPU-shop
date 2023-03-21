import { Navigate, Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home, ProductsPage, Details } from "./pages";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      <Footer />
    </>
  );
};
