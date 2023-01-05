import ResponsiveAppBar from '../components/RespnsiveAppBar';
import Card from '../components/Card';
import { NavLink } from 'react-router-dom';


const Home = () => {
    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <div className='px-28 py-10 main-container'>
                <div className='intro text-left pb-10'>
                    <div className='title text-5xl pb-5'>
                        Ipsum pariatur reprehenderit culpa est
                    </div>
                    <div className='desc text-base'>
                        Eiusmod officia nisi ipsum cillum. Est aute adipisicing proident ex enim sit amet laboris deserunt. Ad quis quis exercitation voluptate id pariatur tempor aliqua et ad occaecat. Ullamco magna anim veniam quis enim dolore aliqua. Qui mollit in magna minim in officia labore reprehenderit sunt ut. Fugiat sunt et eiusmod dolore nostrud elit ex occaecat cillum in duis.
                        Eiusmod officia nisi ipsum cillum. Est aute adipisicing proident ex enim sit amet laboris deserunt. Ad quis quis exercitation voluptate id pariatur tempor aliqua et ad occaecat. Ullamco magna anim veniam quis enim dolore aliqua. Qui mollit in magna minim in officia labore reprehenderit sunt ut. Fugiat sunt et eiusmod dolore nostrud elit ex occaecat cillum in duis.
                        Eiusmod officia nisi ipsum cillum. Est aute adipisicing proident ex enim sit amet laboris deserunt. Ad quis quis exercitation voluptate id pariatur tempor aliqua et ad occaecat. Ullamco magna anim veniam quis enim dolore aliqua. Qui mollit in magna minim in officia labore reprehenderit sunt ut. Fugiat sunt et eiusmod dolore nostrud elit ex occaecat cillum in duis.
                        Eiusmod officia nisi ipsum cillum. Est aute adipisicing proident ex enim sit amet laboris deserunt. Ad quis quis exercitation voluptate id pariatur tempor aliqua et ad occaecat. Ullamco magna anim veniam quis enim dolore aliqua. Qui mollit in magna minim in officia labore reprehenderit sunt ut. Fugiat sunt et eiusmod dolore nostrud elit ex occaecat cillum in duis.
                    </div>
                </div>
                <div className='container pb-5'>
                    <div className='title text-5xl pb-5 text-left'>
                        Top Cited
                    </div>
                    <div className='cards flex justify-between'>
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
                <div className='container pb-5'>
                    <div className='title text-5xl pb-5 text-left'>
                        Most Liked
                    </div>
                    <div className='cards flex justify-between'>
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
                <NavLink to="/explore">
                    <button className='bg-purple-700 border-2 
                    text-purple-200 border-purple-200 px-4 py-2 
                    hover:border-purple-700 hover:text-purple-700 
                    hover:bg-purple-200 mx-4 rounded'>
                        Explore
                    </button>
                </NavLink>
                <NavLink to="/create">
                    <button className='bg-purple-700 border-2 
                    text-purple-200 border-purple-200 px-4 py-2 
                    hover:border-purple-700 hover:text-purple-700 
                    hover:bg-purple-200 mx-4 rounded'>
                        Create
                    </button>
                </NavLink>
            </div>
        </>
    )
}

export default Home;