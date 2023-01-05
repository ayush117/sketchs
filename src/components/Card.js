const Card = () => {
  return (
      <div className="p-2 pb-2 px-2 rounded shadow-lg bg-white max-w-xs">
        <div className="justify-center">
          <img
            className="rounded-r-xs"
            src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
            alt=""
          />
        </div>
        <div className="d-flex justify-content-between">
          <div className="flex justify-between">
            <div className="text-lg text-left pl-4">
              Title   
            </div>
            <div className="text-lg text-left pl-4 pr-6">
              Like
            </div>
          </div>
          <div className="text-lg text-left pl-4">
            Author    
          </div>
        </div>
      </div>
  );
};

export default Card;
