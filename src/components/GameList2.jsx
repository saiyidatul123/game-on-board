import React, { useState, useEffect } from "react";
import Image from "next/image.js";
import Modal from "react-modal";
import Link from "next/link";
import { Provider } from "react-redux";
import store from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { wish } from "../../store/wishlistSlice";

const GameList = ({ MockData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dataClicked, setDataClicked] = useState([]);
  const dispatch = useDispatch();
  const myWishlist = useSelector((state) => state.wishlist.value);

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

  const checkWishlist = () => {
    if (myWishlist.some((arr) => arr.name == dataClicked.name)) {
      alert("Already in Wishlist!");
    } else {
      dispatch(wish(dataClicked));
      alert("Added to Wishlist!");
    }
  };

  useEffect(() => {
    console.log(dataClicked);
  }, [dataClicked]);

  return (
    <Provider store={store}>
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
                    <Link href={""}>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        checkWishlist(dataClicked);
                      }}
                    >
                      Wishlist
                    </button>
                    </Link>
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
    </Provider>
  );
};

export default GameList;
