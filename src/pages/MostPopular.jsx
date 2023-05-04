import React from "react";
import Image from "next/image";

const MostPopular = () => {
  return (
    <>
      <div className="container justify-content-center">
        <div className="row">
          <div className="d-flex justify-content-center align-items-center">
            <h1 className="py-2">Most Popular</h1>
          </div>
          <div className="col">
            <div className="d-flex justify-content-around">
              <Image
                src="/200x200.gif"
                width="200"
                height="200"
                alt="game picture"
                className="rounded-circle"
              />
              <Image
                src="/200x200.gif"
                width="200"
                height="200"
                alt="game picture"
                className="rounded-circle"
              />
              <Image
                src="/200x200.gif"
                width="200"
                height="200"
                alt="game picture"
                className="rounded-circle"
              />
              <Image
                src="/200x200.gif"
                width="200"
                height="200"
                alt="game picture"
                className="rounded-circle"
              />
            </div>
          </div>
          <div className="row mt-4">
            <h2>Our Story</h2>
            <h3>
              Duis eleifend, elit eu tincidunt bibendum, mi orci pellentesque
              dui, condimentum pretium magna lorem non sem. Pellentesque
              efficitur convallis mauris, in fringilla tortor posuere non.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default MostPopular;
