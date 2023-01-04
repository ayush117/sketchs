import ResponsiveAppBar from '../components/RespnsiveAppBar';
import Card from '../components/Card';

const Explore = () => {
    return (
    <>
        <ResponsiveAppBar></ResponsiveAppBar>
        <div className="flex flex-wrap justify-center">
            <Card/>
            <Card/>
            <Card/>
            <Card/><Card/>
            <Card/>
        </div>
    </>
    )
}

export default Explore;