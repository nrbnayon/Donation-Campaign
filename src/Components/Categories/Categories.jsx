import useDonationData from "../../Hooks/useDonationData";
import CategoryList from "./CategoryList";
const Categories = () => {
  const { data, loading } = useDonationData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
      {data.map((item) => (
        <CategoryList key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Categories;
