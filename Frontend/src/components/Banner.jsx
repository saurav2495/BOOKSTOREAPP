import React from "react";
import banner from "../../public/Banner.png";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container bg-white mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className=" w-full md:w-1/2 mt-32 text-black order-2 md:order-1">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold">
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-500">new everyday!!!!</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rem
              cupiditate ea veniam dolorum aliquid? Ea praesentium, ut vero
              quod, similique sapiente eos officiis, adipisci illum veritatis
              autem aut cum.
            </p>
            <label className="input input-bordered bg-white flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <button className="btn btn-active border-none px-4 py-1 space-x-3 rounded-md  text-white bg-pink-500">
              Thooko
            </button>
          </div>
        </div>
        <div className=" w-full md:w-1/2 order-1">
          <img src={banner} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
