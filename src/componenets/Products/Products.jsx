import React from "react";
import Img1 from "../../assets/Products/burger.png";
import Img3 from "../../assets/Products/friedrice.png";
import Img2 from "../../assets/Products/pizza.png";
import HeaderTitle from "../HeaderTitle/HeaderTitle";

const ProductsData = [
    {
      id: 1,
      img: Img1,
      name: "Chicken Burger",
      description:
        "Savor the succulent taste of our chicken burger, crafted with tender, grilled chicken breast, layered with crisp lettuce, ripe tomatoes, and creamy mayonnaise, all nestled between a toasted brioche bun. A mouthwatering delight that satisfies every craving.",
      aosDelay: "100",
    },
    {
      id: 2,
      img: Img2,
      name: "Cheese Fiesta Pizza",
      description:
        "Indulge in our Cheese Fiesta Pizza, a delectable delight that combines a medley of premium cheeses atop a crispy, golden crust. With each bite, savor the creamy richness of mozzarella, the sharpness of cheddar, and the tanginess of Parmesan, creating a flavor explosion that will tantalize your taste buds. Welcome to pizza paradise.",
      aosDelay: "300",
    },
    {
      id: 3,
      img: Img3,
      name: "Seafood Fried Rice",
      description:
        "Dive into a culinary adventure with our Seafood Fried Rice, a tantalizing fusion of fragrant jasmine rice stir-fried with an assortment of fresh seafood delights. Each bite is a symphony of flavors, from succulent shrimp to tender scallops and delicate crabmeat, perfectly seasoned and expertly cooked to perfection. Experience the taste of the ocean in every mouthwatering bite.",
      aosDelay: "500",
    },
  ];

const Products = () => {
  return  <div className="bg-gray-100 py-14">
        <div className="py-12 lg:py-20">
            <div className="container">
                <HeaderTitle title="Products"
            subtitle="Our Products"
            description={
              "Experience culinary perfection with our menu of delicious delights. From juicy burgers to fresh salads, gourmet pizzas, and decadent desserts, each bite is a journey of flavor. Welcome to a world of culinary bliss."
            }/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
                {ProductsData.map((Products) => (
                    <div data-aos="fade-up"
                    data-aos-delay={Products.aosDelay}
                    className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]">
                    <div className="h-[100px]">
                        <img className="max-w-[200px] block mx-auto transform -translate-y-16
                   group-hover:scale-105 duration-300"
                         src={Products.img} alt="" />
                    </div>
                    <div className="p-4 text-center">
                        <h1 className="text-xl font-bold">{Products.name}</h1>
                        <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">{Products.description}</p>
                    </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    </div>;
  
};

export default Products;