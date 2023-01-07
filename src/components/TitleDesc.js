const TitleDesc  = () => {
    return <>
        <div>
            <div className="text-left text-white pb-2 font-bold text-xl">Title</div>
            <div className="text-wrapper">
            <textarea rows="4" placeholder="Summary/Description" className="w-full bg-purple-400 text-black placeholder:text-black"></textarea>
            </div>
        </div>
    </>
}

export default TitleDesc;