import ResponsiveAppBar from "../components/RespnsiveAppBar";
import Card from "../components/Card";
import { useState } from "react";

const User = () => {
  const [data, setData] = useState([1,1,1]);
  const [upload, setUpload] = useState([1,1,1]);
  const [like, setLike] = useState([1,1,1]);

  const showMore = (type) => {
    if(type === 'f') setData([...data, 1,2,3]);
    else if(type === 'u') setUpload([...upload, 1,2,3]);
    else if(type === 'l') setLike([...like, 1,2,3]);
  }

  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
          <img
            className="w-full"
            alt="img of a girl posing"
            src="https://i.ibb.co/QMdWfzX/component-image-one.png"
          />
        </div>
        
        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
          <div className="">
            <h1 className="text-left text-2xl font-semibold text-white-800 mb-12">
              Balenciaga Signature Sweatshirt (@Username)
            </h1>
          </div>
          <div>
            <p className="text-left xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">
              It is a long established fact that a reader will be distracted by
              thereadable content of a page when looking at its layout. The
              point of usingLorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </p>
          </div>
        </div>
      </div>
      <div className="text-4xl pb-8">
        Featured
        <div className="grid grid-cols-3 m-auto max-w-fit p-4 pb-3.5 px-4">
                {
                  data.map(item => {
                    return (
                      <div className="p-4 pb-3.5 px-4">
                        <Card />
                      </div>
                    )
                  })
                }
        </div>
        <div className="text-sm">
          <button onClick={() => showMore("f")}>
            See more...
          </button>
        </div>
      </div>
      <div className="text-4xl pb-8">
        Uploads
        <div className="grid grid-cols-3 m-auto max-w-fit p-4 pb-3.5 px-4">
                {
                  upload.map(item => {
                    return (
                      <div className="p-4 pb-3.5 px-4">
                        <Card />
                      </div>
                    )
                  })
                }
        </div>
        <div className="text-sm">
          <button onClick={() => showMore("u")}>
            See more...
          </button>
        </div>
      </div>
      <div className="text-4xl pb-8">
        Liked
        <div className="grid grid-cols-3 m-auto max-w-fit p-4 pb-3.5 px-4">
                {
                  like.map(item => {
                    return (
                      <div className="p-4 pb-3.5 px-4">
                        <Card />
                      </div>
                    )
                  })
                }
        </div>
        <div className="text-sm">
          <button onClick={() => showMore("l")}>
            See more...
          </button>
        </div>
      </div>
    </>
  );
};

export default User;
