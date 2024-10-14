
import { MdHome, MdPerson, MdEmail,MdBuild, } from 'react-icons/md';
import Image from 'next/image';


const Header = () => {
 
  return (
    <div>
        <nav className='nav-bar'>  
          <Image className='image'
          src='/web-logo.png'
          alt='logo'
          width={200}
          height={50}/>   
          
          <ul>
            <li><MdHome/>Home</li>
            <li><MdPerson/>About Us</li>
            <li><MdEmail/>Contact Us</li>
            <li><MdBuild/>Services</li>
          </ul>
        </nav>
    </div>
  )
}

export default Header