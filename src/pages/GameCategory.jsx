import Image from "next/image";
import { motion } from "framer-motion";

const GameCategory = () => {
  return (
    <>
      <title>Game Category</title>
      <div className="container">
        <h1 className="py-2">Choose Category</h1>
        <nav
          class="nav nav-underline flex-column flex-sm-row justify-content-center py-4"
          role="tablist"
        >
          <div className="col-2">
            <a
              class="flex-sm-fill text-sm-center nav-link active"
              aria-current="page"
              href="#"
              id="all-tab"
              data-bs-target=".game"
              type="button"
              role="tab"
              aria-controls=".game"
              aria-selected="true"
            >
              All
            </a>
          </div>
          <div className="col-2">
            <a
              class="flex-sm-fill text-sm-center nav-link"
              aria-current="page"
              href="#"
              id="cat1-tab"
              data-bs-target=".cat1"
              type="button"
              role="tab"
              aria-controls=".cat1"
              aria-selected="true"
            >
              Category 1
            </a>
          </div>
          <div className="col-2">
            <a
              class="flex-sm-fill text-sm-center nav-link"
              aria-current="page"
              href="#"
              id="cat2-tab"
            >
              Category 2
            </a>
          </div>
          <div className="col-2">
            <a
              class="flex-sm-fill text-sm-center nav-link"
              aria-current="page"
              href="#"
              id="cat3-tab"
            >
              Category 3
            </a>
          </div>
        </nav>
        <div className="row">
          <div className="d-flex justify-content-between tab-content">
            <div className="game cat1 tab-pane fade show active" role="tabpanel" aria-labelledby="all-tab" tabindex="0">
              <Image
                src="/1.jpg"
                width="200"
                height="200"
                alt="profile picture"
              />
            </div>
            <div className="game cat1 tab-pane fade show active" role="tabpanel" aria-labelledby="cat1-tab" tabindex="0">
              <Image
                src="/2.jpg"
                width="200"
                height="200"
                alt="profile picture"
              />
            </div>
            <div className="game cat2 tab-pane fade show active" role="tabpanel" aria-labelledby="cat2-tab" tabindex="0">
              <Image
                src="/3.jpg"
                width="200"
                height="200"
                alt="profile picture"
              />
            </div>
            <div className="game cat2 tab-pane fade show active" role="tabpanel" aria-labelledby="cat2-tab" tabindex="0">
              <Image
                src="/4.jpg"
                width="200"
                height="200"
                alt="profile picture"
              />
            </div>
            <div className="game cat3 tab-pane fade show active" role="tabpanel" aria-labelledby="cat3-tab" tabindex="0">
              <Image
                src="/5.jpg"
                width="200"
                height="200"
                alt="profile picture"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameCategory;
