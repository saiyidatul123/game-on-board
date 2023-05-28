// import React, { useEffect } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
// import { useEffect } from "react";

const Wishlist = () => {
  const myWishlist = useSelector((state) => state.wishlist.value);

  // useEffect(() => {
  //   console.log(myWishlist);
  // }, []);

  return (
    <>
      {!myWishlist.length ? (<h5 className="mt-5">No wishlist yet.</h5>) : (
        myWishlist.map((item) => {
          return (
            <Image
              className="m-3"
              key={item.id}
              src={item.image}
              width="200"
              height="200"
              alt={item.name}
            />
          );
        }))}
    </>
  );
};

export default Wishlist;
