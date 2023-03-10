import "./App.css";
import { Routes, Route } from "react-router-dom";
import BookList from "./components/booklist";
import BookDetails from "./components/bookdetails";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Favorites from "./components/favorites";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
