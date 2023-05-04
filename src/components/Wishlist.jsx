import React, { useEffect } from "react";
import Image from "next/image";

const Wishlist = ({ myWishlist }) => {
  
  useEffect(() => {
    console.log(myWishlist);
  }, [myWishlist]);
  
  return (
    <>
      {myWishlist &&
        myWishlist.map((item) => {
          <Image
            src={item.image}
            width="200"
            height="200"
            alt="profile picture"
          />;
        })}
    </>
  );
};

export default Wishlist;
