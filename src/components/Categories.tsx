import { orderDataBy } from "../assets/Dummydata";
import { useGlobalState } from "../context/ContextApi";

const Categories = () => {
  const { setOrderBy, orderBy } = useGlobalState();

  return (
    <select className="bg-green-600 mx-20 px-4 py-2" onChange={(e) => setOrderBy(e.currentTarget.value)}>
      {orderDataBy.map((item) => (
        <option value={item.value} key={item.value}>
          {orderBy === item.value ? `${item.name} ✅` : item.name}
        </option>
      ))}
    </select>
  );
};

export default Categories;
