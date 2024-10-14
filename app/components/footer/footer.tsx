import React from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='footer'>
      <h2>Created by [Abdul Wasay]</h2>

      <ul>
        <li><Link href="https://www.instagram.com/abdul_wasay54/" target='blank'><FaInstagram>Instagram</FaInstagram> Instagram</Link> </li>
        <li><Link href="https://www.linkedin.com/in/abdul-wasay-a022422ba/" target='blank'><FaLinkedin></FaLinkedin> Linkedin</Link></li>
        <li><Link href="mailto:wasayriirus@gmail.com"><SiGmail></SiGmail>Gmail</Link></li>
      </ul>
    </div>
  )
}

export default Footer