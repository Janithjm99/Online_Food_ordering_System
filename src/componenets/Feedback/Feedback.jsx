import React from "react";
import Slider from "react-slick";
import HeaderTitle from "../HeaderTitle/HeaderTitle";

const settings = {
    dots: false,
    arrows: false,
    loop: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    mobileFirst: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
  };
  const FeedbackData = [
    {
      id: 1,
      name: "Samuel John",
      feedback:
        "I love using the online ordering system! It's so easy to navigate, and I can quickly place my order without any hassle. The best part is that my food always arrives hot and fresh. Definitely my go-to for ordering food!",
      img: "https://picsum.photos/104/104",
    },
    {
      id: 1,
      name: "John Doe Jr.",
      feedback:
        "The online ordering system is a game-changer! I appreciate being able to customize my order and see all the available options right at my fingertips. Plus, the order tracking feature keeps me updated on the status of my delivery. Great service!",
      img: "https://picsum.photos/105/105",
    },
    {
      id: 1,
      name: "Neymar Jr.",
      feedback:
        "I've been using the online ordering system regularly, and it never disappoints. It's convenient, reliable, and saves me time. The variety of menu items is impressive, and the ordering process is smooth. Highly recommend trying it out!",
      img: "https://picsum.photos/106/106",
    },
  ];

const Feedback = () => {
  return <div className="py-10">
    <div className="container">
    <HeaderTitle title="Feedback"
            subtitle="What our customers say"
            description={
              "Experience culinary perfection with our menu of delicious delights. From juicy burgers to fresh salads, gourmet pizzas, and decadent desserts, each bite is a journey of flavor. Welcome to a world of culinary bliss."
            }/>
            <div className="max-w-[600px] mx-auto">
                <Slider {...settings}>
                    {FeedbackData.map((data) => (
                          <div data-aos="fade-up" key={data.id}>
                            <div className="text-center shadow-lg p-4 rounded-xl space-y-3 my-8 mx-5">
                                <img src={data.img} alt="" className="rounded-full block mx-auto"/>
                                <p className="text-gray-500 text-sm">{data.feedback}</p>
                                <h1 className="text-xl font-bold">{data.name}</h1>
                            </div>
                          </div>  
                        ))
                    }
                </Slider>
            </div>
    </div>
  </div>;

};

export default Feedback;