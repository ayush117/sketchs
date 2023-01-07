import { useState } from "react";
import AssetImage from "../components/AssetImage";
import Card from "../components/Card";
import OptionalText from "../components/OptionalText";
import ResponsiveAppBar from "../components/RespnsiveAppBar";
import Tags from "../components/Tags";
import TitleDesc from "../components/TitleDesc";

const Asset = () => {
    const [cardArray, setCardArray] = useState([<Card key="1"/>,
    <Card key="2"/>,
    <Card key={"3"}/>]);
    const [cardArrayCnt, setCardArrayCnt] = useState(4);
    const handleShowMore = () => {
        setCardArray((cardArray) => {
            cardArray.push(<Card key={cardArrayCnt}/>);
            cardArray.push(<Card key={cardArrayCnt + 1}/>);
            cardArray.push(<Card key={cardArrayCnt + 2}/>);
            setCardArrayCnt(cardArrayCnt + 3);
            return cardArray;
        })
    }
    return <>
        <ResponsiveAppBar />
        <div className='px-28 py-10 main-container text-left text-white'>
            <div className="flex">
                <AssetImage />
                <div className="basis-2/4 flex flex-col pl-4">
                    <TitleDesc />
                    <div className="font-bold text-xl text-white py-4">Silimar To: </div>
                    <div className="tags flex">
                        <Tags />
                        <Tags />
                        <Tags />
                        <Tags />
                    </div>
                    <div className="py-4"><span className="font-bold text-xl text-white">Made By: </span> Name</div>
                    <div className="pb-4">Date: YYYY-MM-DD</div>
                    <OptionalText />
                </div>
            </div>
            <div>
                <div className="title text-5xl pb-5 text-center pt-5">SIMILAR</div>
                <div className="cards flex justify-between pt-5 flex-wrap px-10">
                    {cardArray}
                </div>
                <div className="text-white text-center pt-5">
                    <span className="hover:cursor-pointer" onClick={handleShowMore}>Show More...
                    </span>
                    </div>
            </div>

        </div>
    </>

}

export default Asset;