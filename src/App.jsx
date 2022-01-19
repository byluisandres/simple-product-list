import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas
import Index from "./pages/Productos/Index";
import Create from "./pages/Productos/Create";
import Edit from "./pages/Productos/Edit";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container mt-5">
        <Routes>
          <Route index path="/" element={<Index />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
