import Carousel from '../CommonComponents/Carousel/Carousel'
import BreakingNews from './HomeComponents/BreakingNews/BreakingNews'
import FeaturedCategory from './HomeComponents/FeaturedCategory/FeaturedCategory'
import FeaturedProducts from './HomeComponents/FeaturedProducts/FeaturedProducts'

const Home = () => {
    return (
        <div className='mt-3'>
            <Carousel />
            <div className='mt-8'>
                <BreakingNews />
            </div>
            <div className='mt-8'>
                <FeaturedCategory />
            </div>
            <div className='mt-8'>
                <FeaturedProducts />
            </div>
        </div>
    )
}

export default Home
