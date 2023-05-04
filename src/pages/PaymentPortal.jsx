import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const PaymentPortal = () => {
  const router = useRouter();
  const query = router.query;
  const name = query.name;
  const image = query.image;
  const price = query.price;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mb-6 text-center">
          <h1>Payment Portal</h1>
          <hr />
          <div className="col-4 mx-auto">
            <h2>Game: {name}</h2>
            <Image src={image} alt={name} height="200" width="200" />
            <h3 className="text-center">Price: {price}</h3>
            <Link href={{pathname:"/MemberPage", query: query}}>
              <button
                className="btn btn-warning"
                onClick={() => {
                  alert("Successful!");
                }}
              >
                Checkout
              </button>
            </Link>
            <Link href={"/GameCategory2"}>
            <button className="btn btn-danger">Cancel</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPortal;
