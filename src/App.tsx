// import { useQuery } from "react-query";

import { Route, Routes } from "react-router-dom";
import { DetailGame, Genres, Home, Login, Search, SearchResult } from "./pages";
import { FooNav, Navbar } from "./layout";

function App() {
  return (
    <div className="bg-gradient-to-t via-zinc-800 to-zinc-900 from-zinc-900 relative  min-h-screen">
      <Navbar />
      <FooNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route element={<SearchResult />} path="/search/:id" />
        <Route path="/login" element={<Login />} />
        <Route path="/games/:id" element={<DetailGame />} />
        <Route path="/genre/:genre" element={<Genres />} />
      </Routes>
    </div>
  );
}

export default App;
