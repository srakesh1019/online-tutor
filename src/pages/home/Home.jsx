import HeroOne from '../../components/heroone/HeroOne'
import BookDemo from '../../components/bookdemo/BookDemo';
import ShowNumbers from '../../components/shownumbers/ShowNumbers';
import FeatureFour from '../../components/featurefour/FeatureFour';
import Features from '../../components/features/Features';
import Faq from '../../components/faq/Faq';

const Home = () => {
  return (
    <>
     <HeroOne/> 
     <ShowNumbers/>
     <FeatureFour/>
     <BookDemo/>
     <Features/>
     <Faq/>
    </>
  )
}

export default Home;
