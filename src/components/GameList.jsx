import React, { useState, useEffect } from "react";
import Image from "next/image.js";
import Modal from "react-modal";
import Link from "next/link";

const GameList = ({ MockData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dataClicked, setDataClicked] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const customStyles = {
    overlay: { backgroundColor: "rgba(0, 0, 0, 0.2)" },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const addWishlist = () => {
    if (wishlist.some((arr) => arr.name == dataClicked.name)) {
      alert("Already in Wishlist!");
    } else {
      setWishlist([...wishlist, dataClicked]);
      alert("Added to Wishlist!");
    }
  };

  useEffect(() => {
    console.log(wishlist);
  }, [wishlist]);

  return (
    <div className="row my-5">
      {MockData &&
        MockData.map((item) => {
          return (
            <div className="col-xl-4" key={item.id}>
              <div className="row">
                <Image
                  src={item.image}
                  alt={item.name}
                  height="350"
                  width="350"
                  className="m-3"
                  onClick={() => {
                    setIsOpen(true), setDataClicked(item);
                  }}
                />
              </div>
              <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
                ariaHideApp={false}
              >
                <h1>{dataClicked.name}</h1>
                <Image
                  src={dataClicked.image}
                  alt={dataClicked.name}
                  height="250"
                  width="250"
                />
                <div className="d-flex m-2 justify-content-center">
                  <Link
                    href={{ pathname: "/PaymentPortal", query: dataClicked }}
                  >
                    <button className="btn btn-primary">Rent</button>
                  </Link>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        addWishlist(dataClicked);
                        // myWishlist = { wishlist };
                      }}
                    >
                      Wishlist
                    </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => setIsOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </Modal>
            </div>
          );
        })}
    </div>
  );
};

export default GameList;
