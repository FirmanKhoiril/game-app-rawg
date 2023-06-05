// import { useQuery } from "react-query";

import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { Navbar } from "./layout";

function App() {
  // const { data } = useQuery(["dataDetailGame", page], () => getData(page), {
  //   refetchOnWindowFocus: false,
  // });
  // console.log(data);
  return (
    <div className="bg-zinc-900  min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
