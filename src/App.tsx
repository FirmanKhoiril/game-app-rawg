import { Route, Routes } from "react-router-dom";
import { DetailGame, Developers, Genres, Home, Login, Platform, Publisher, Search, SearchResult, Tags } from "./pages";
import { FooNav, Navbar } from "./layout";

const App = () => {
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
        <Route path="/developer/:developer" element={<Developers />} />
        <Route path="/tag/:tag" element={<Tags />} />
        <Route path="/publisher/:publisher" element={<Publisher />} />
        <Route path="/platform/:platform" element={<Platform />} />
      </Routes>
    </div>
  );
};

export default App;
