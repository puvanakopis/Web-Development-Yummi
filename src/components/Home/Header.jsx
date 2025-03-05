import "./Header.css"
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className='Header flex items-center justify-center h-screen bg-gray-200'>
      <img src={assets.Banner} alt="" />
    </div>
  )
}

export default Header