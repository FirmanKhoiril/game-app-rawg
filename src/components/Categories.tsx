import { orderDataBy } from "../assets/Dummydata";
import { useGlobalState } from "../context/ContextApi";

const Categories = () => {
  const { setOrderBy, orderBy } = useGlobalState();

  return (
    <div className="grid md:flex gap-4 px-6 md:justify-center md:flex-wrap grid-cols-2 grid-rows-3 ">
      {orderDataBy.map((data) => (
        <button
          type="button"
          key={data.name}
          onClick={() => setOrderBy(data.value)}
          className={`py-2 font-bold ${data.value === orderBy ? "shadow-[0px_2px_3px_2px] scale-[1.05]" : " shadow-sm"} tracking-wide trans font-poppins  shadow-white/20  rounded-lg min-w-[140px]  px-3 ${data.color}`}
        >
          {data.name}
        </button>
      ))}
    </div>
  );
};

export default Categories;
