import ResponsiveAppBar from "../components/RespnsiveAppBar";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import Tags from "../components/Tags";
import { useState } from "react";

const Explore = () => {
  const [data, setData] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1]);

  const showMore = (type) => {
    setData([...data, 1, 2, 3]);
  };

  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>

      <div className="flex pt-4 justify-center">
        <Filter />
        <Sort />
        <SearchBar />
      </div>

      <div className="justify-center">
        <div class="py-2 text-lg font-medium">Tags:</div>
        <div class="flex flex-wrap justify-center space-x-2">
          <Tags />
          <Tags />
          <Tags />
          <span class="px-2 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
            <button class="bg-transparent hover focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            </button>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 m-auto max-w-fit p-4 pb-3.5 px-4">
        {data.map((item) => {
          return (
            <div className="p-4 pb-3.5 px-4">
              <Card />
            </div>
          );
        })}
      </div>
      <div className="text-sm">
        <button onClick={() => showMore("f")}>See more...</button>
      </div>
    </>
  );
};

export default Explore;
