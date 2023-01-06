import Tags from "./Tags";
const PromptInvokes = () => {
    return <div className="pt-2 pb-2">
        <div className="pb-5 text-xl font-bold text-white text-left">Prompt Invokes:</div>
        <div className="tags flex">
            <Tags /><Tags /><Tags />
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
}

export default PromptInvokes;