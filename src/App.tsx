// import { useQuery } from "react-query";

import { Route, Routes } from "react-router-dom";
import { DetailGame, Home, Login, Search, SearchResult } from "./pages";
import { FooNav, Navbar } from "./layout";

function App() {
  // const { data } = useQuery(["dataDetailGame", page], () => getData(page), {
  //   refetchOnWindowFocus: false,
  // });
  // console.log(data);
  return (
    <div className="bg-zinc-900  min-h-screen">
      <Navbar />
      <FooNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route element={<SearchResult />} path="/search/:id" />
        <Route path="/login" element={<Login />} />
        <Route path="/game-detail/:id" element={<DetailGame />} />
      </Routes>
    </div>
  );
}

export default App;
