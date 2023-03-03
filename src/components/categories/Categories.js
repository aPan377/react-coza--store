import Category from "./Category";

import { useSelector } from "react-redux";

const Categories = () => {
  const categories = useSelector((state) => state.categories);

  return (
    <section className="categories--container">
      {categories.map((category, index) => (
        <Category
          key={index}
          name={category.name}
          description={category.description}
          imgSource={category.imgSource}
        />
      ))}
    </section>
  );
};

export default Categories;
