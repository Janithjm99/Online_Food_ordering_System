import React from "react";
import Joy from "../../assets/Products/Joy.png";
import Vector from "../../assets/vec.jpg";

const ImageList = [

];

const Welcome = () => {
    const [imageId, setImageId] = React.useState(Joy);

    const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
    };

return (
    <div className="min-h-[650px] bg-gray-100 " style={bgImage}>
        <div className="min-h-[650px] backdrop-blur-md flex justify-center items-center">
            <div className="container pb-8 sm:pb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                <h1
                    data-aos="zoom-out"
                    className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold"
                >
                Welcome to{" "}
                <span
                    className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-[4px_4px_0_rgba(255, 255, 255,1)] "
                    style={{
                        filter: "drop-shadow(4px 4px 0 rgba(255, 255, 255,1))",
                    }}
                >
                    Joy Food
                    </span>{" "}
                    Family Shop
                </h1>
                <p data-aos="fade-up" className="text-sm" style={{ color: 'white', fontSize: '18px', fontStyle: 'italic' }}>
                Explore our delicious menu and enjoy fast delivery to your doorstep. Order now and satisfy your cravings!
                </p>
                <div data-aos="fade-up" data-aos-delay="300">
                    <button className="bg-gradient-to-r from-purple-500 to-red-500 to-white hover:scale-105 duration-200 text-black font-bold py-2 px-4 rounded-full border-2 border-white">
                    Order Now
                    </button>
                </div>
                </div>
              {/* Image section */}
                <div className="min-h-[400px] flex justify-center items-center relative order-1 sm:order-2">
                <div data-aos="fade-left" data-aos-delay="300">
                    <img
                    src={imageId}
                    alt="biryani img"
                    className="max-w-[430px] hover:scale-105 duration-300 w-full mx-auto drop-shadow-[-6px_20px_15px_rgba(0,0,0,1)]"
                    />
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
        );
};

export default Welcome;