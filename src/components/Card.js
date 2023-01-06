const Card = () => {
  return <>
      <div className="card flex flex-col overflow-hidden shadow-xl rounded-lg bg-slate-700 p-4 mb-2" style={{flexBasis: "32%"}}>
          <div className="image rounded-sm flex justify-center pb-2">
              <img className="rounded-lg" src="/images/dummy.png" alt="dummy"></img>
          </div>
          <div className="card-info flex flex-col">
              <div className="flex justify-between">
                  <div className="font-bold text-base">
                      Title
                  </div>
                  <div className="inline-flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                      <span className="text-lg relative bottom-1">5</span>
                  </div>
              </div>
              <div className="text-left">
                  Author
              </div>
          </div>

      </div>
  </>
}

export default Card;
