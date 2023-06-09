import { useQuery } from "react-query";
import { Card, Categories } from "../components";
import { HeroSection } from "../layout";
import { getData } from "../api/fetch";
import { TResult } from "../types/Types";

const Home = () => {
  const { data } = useQuery(["dataDetailGame"], () => getData(), {
    refetchOnWindowFocus: false,
  });

  return (
    <div className="min-h-screen">
      <nav>
        <h1 className="font-poppins px-4 py-2 text-3xl font-bold md:tracking-wide md:hidden block bg-gradient-to-r from-green-500 via-green-300 to-green-400 bg-clip-text text-transparent">GAMEMASTER</h1>
      </nav>
      <HeroSection />
      <Categories />
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {data?.results?.map((result: TResult, idx: number) => (
          <Card key={idx} item={result} />
        ))}
      </div>
    </div>
  );
};

export default Home;
