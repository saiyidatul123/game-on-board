import { HiShoppingCart } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";

const header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="">
                OUR STORY
              </a>
              <a className="nav-link" href="#">
                BLOG
              </a>
              <a className="nav-link" href="#">
                SALE
              </a>
              <a className="nav-link" href="#">
                CONTACT
              </a>
            </div>
          </div>
          <Link href={"/GameCategory2"}>
            <button className="border p-2">RENT A GAME !</button>
          </Link>
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <form className="d-flex px-4" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success align-items-center"
                  type="submit"
                >
                  <BsSearch />
                </button>
              </form>
              <HiShoppingCart />
            </div>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default header;
