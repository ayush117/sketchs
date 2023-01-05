const Card = () => {
  return (
      <div className="p-4 pb-3.5 px-4 rounded-none shadow-lg bg-white max-w-xs">
        <div className="justify-center">
          <img
            className="rounded-r-xs"
            src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
            alt=""
          />
        </div>
        <div className="d-flex justify-content-between">
          <h2 className="text-lg mb-2">Title
            <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">
              Tag
            </span>
          </h2>
          Author    
        </div>
      </div>
  );
};

export default Card;
