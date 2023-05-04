import Wishlist from "@component/components/Wishlist";
import Image from "next/image";
import { useRouter } from "next/router";

const MemberPage = () => {
  const router = useRouter();
  const query = router.query;
  const image = query.image;

  return (
    <>
      <title>Member Page</title>
      <div className="container">
        <div className="py-4">
          <h1>Member Page</h1>
          <hr/>
        </div>
        <div className="row">
          <div className="col-4 d-flex justify-content-center">
            <Image
              src="/200x200.gif"
              width="200"
              height="200"
              alt="profile picture"
              className="rounded-circle"
            />
          </div>
          <div className="col-4 d-flex justify-content-center">
            <h3>
              Duis eleifend, elit eu tincidunt bibendum, mi orci pellentesque
              dui, condimentum pretium magna lorem non sem. Pellentesque
              efficitur convallis mauris, in fringilla tortor posuere non.
            </h3>
          </div>
          <div className="col-4 d-flex flex-column align-items-center">
            <h3>Currently rented</h3>
            <Image
              src={image}
              width="200"
              height="200"
              alt="currently rented"
            />
          </div>
        </div>
        <div className="row mt-5">
          <h3>Wishlist(0)</h3>
          <div className="d-flex justify-content-between">
            <Wishlist/>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberPage;
