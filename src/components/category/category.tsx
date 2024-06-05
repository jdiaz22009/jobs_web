import CategoryItem from "./categoryItem";

const Category = () => {
  return (
    <div className="p-10 items-center">
      <div className="flex justify-center items-center text-center font-bold text-3xl">
        <h1>Categorias Populares</h1>
      </div>

      <div>
        <CategoryItem />
      </div>
    </div>
  );
};

export default Category;
