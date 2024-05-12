import React from "react";

function Cards({ item }) {
  // here we pass the item from the props
  console.log(item);
  return (
    <>
      <div className="mt-4 my-3 p-5">
        <div className="card w-92 bg-white text-black shadow-xl hover:scale-105 duration-200">
          <figure>
            <img src={item.image} alt="images" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className=" text-white badge badge-secondary">
                {item.category}
              </div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px]  hover:bg-pink-500 hover:text-white">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
