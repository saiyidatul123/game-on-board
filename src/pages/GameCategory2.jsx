import { React } from "react";
import GameList from "@component/components/GameList";
import MockData from "src/pages/MockData.json";

const GameCategory2 = () => {

  return (
    <>
      <h1 className="mt-5 text-center ">Choose Category</h1>
      <hr />
      <div className="game-tabs container">
        <div className="game-tab d-flex justify-content-around">
          <button className="btn active">All</button>
          <button className="btn">Category 1</button>
          <button className="btn">Category 2</button>
          <button className="btn">Category 3</button>
        </div>
      </div>
      <div className="game-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <GameList MockData={MockData}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameCategory2;
