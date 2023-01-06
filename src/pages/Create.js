import Card from "../components/Card";
import FileSelect from "../components/FileSelect";
import OptionalText from "../components/OptionalText";
import OtherResults from "../components/OtherResults";
import PromptInvokes from "../components/Prompt";
import ResponsiveAppBar from "../components/RespnsiveAppBar";
import TitleDesc from "../components/TitleDesc";

const Create = () => {
    return <>
        <ResponsiveAppBar />
        <div className='px-28 py-10 main-container'>
            <div className="flex">
                <FileSelect />
                <div className="basis-2/4 flex flex-col pl-4">
                    <TitleDesc />
                    <PromptInvokes />
                    <span className="font-bold text-xl text-white pb-5 text-left">Genrated By:
                        <select className="text-black font-normal text-lg ml-5 px-5">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </span>
                    <OptionalText />
                </div>
            </div>
            <button className="my-5 text-white bg-purple-900 px-5 py-2 rounded border-2 border-white hover:bg-purple-700 hover:text-black hover:border-black">Submit</button>
            <OtherResults />
            <div className="cards flex justify-between pt-5">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </>
}

export default Create;