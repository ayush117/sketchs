import Tags from "./Tags";

const OtherResults = () => {
    return <>
        <div className="text-xl text-white font-bold text-left pb-4">
            Site Other Results:
        </div>
        <div className="flex">
            <div className="flex basis-2/4">
                <span className="text-xl text-white font-bold pr-4">Tagged:</span>
                <Tags />
                <Tags />
            </div>
            <div className="flex basis-2/4">
                <span className="text-xl text-white font-bold pr-4">Suggested:</span>
                <Tags />
                <Tags />
                <Tags />
                <span
                    class="px-2 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                    <button class="bg-transparent hover focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                        </svg>
                    </button>
                </span>
            </div>
        </div>
        <div className="flex pt-10 justify-between">
            <div className="border-2 border-black flex px-2 bg-purple-300" style={{flexBasis: "45%"}}>
                <div className="basis-11">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                </div>
                <input type="text" placeholder="Search" className="w-full bg-purple-300 outline-none"></input>

            </div>
            <div className="border-2 border-black px-2 bg-purple-300" style={{flexBasis: "22.5%"}}>
                <select className="w-full bg-purple-300 outline-none">
                    <option>Sort By</option>
                </select>
            </div>
            <div className="border-2 border-black px-2 bg-purple-300" style={{flexBasis: "22.5%"}}>
                <select className="w-full bg-purple-300 outline-none">
                    <option>
                        Filter By
                    </option>
                </select>
            </div>
        </div>
    </>
}

export default OtherResults;