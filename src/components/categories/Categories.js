import Category from "./Category";

import category1 from "../../images/banner-01.jpg";
import category2 from "../../images/banner-02.jpg";
import category3 from "../../images/banner-03.jpg";
import category4 from "../../images/banner-04.jpg";
import category5 from "../../images/banner-05.jpg";
import category6 from "../../images/banner-06.jpg";
import category7 from "../../images/banner-07.jpg";

const Categories = () => {
  const categories = [
    { name: "Women", description: "Spring 2023", imgSource: category1 },
    { name: "Men", description: "Spring 2023", imgSource: category2 },
    { name: "Hats & Caps", description: "Spring 2023", imgSource: category3 },
    { name: "Bags", description: "Spring 2023", imgSource: category4 },
    { name: "Watches", description: "Spring 2023", imgSource: category5 },
    { name: "Purses", description: "Spring 2023", imgSource: category6 },
    { name: "Belts", description: "Spring 2023", imgSource: category7 },
  ];

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
