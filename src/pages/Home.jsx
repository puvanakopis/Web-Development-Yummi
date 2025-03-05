import Header from "../components/Home/Header"
import HomeMenu from "../components/Home/HomeMenu"
import FeedBack from '../components/Home/FeedBack'
import Offers from '../components/Home/Offers'
import Features from '../components/Home/Features '
import "./Home.css"


const Home = () => {
  return (
    <div>
      <Header/>
      <Features/>
      <Offers/>
      <HomeMenu/>
      <FeedBack/>
    </div>
  )
}

export default Home
