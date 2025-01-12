import React, { useState, useRef, useEffect } from 'react'
import { FaFacebook } from 'react-icons/fa'
import { BsInstagram, BsYoutube } from 'react-icons/bs'
import { Menu, Clock } from 'lucide-react'
import DevanagariA from './Icon'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const lastUpdated = "31-12-2024"
  const dropdownRef = useRef(null)

  const toggleDropdown = (e) => {
    e.stopPropagation()
    setIsOpen(!isOpen)
    setIsAnimating(true)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const socialLinks = [
    { icon: BsYoutube, href: "https://www.youtube.com/@Haiteckscratch-po4sv/shorts", name: "Youtube" },
    { icon: BsInstagram, href: "https://www.instagram.com/aarti_jadhav_star_/reel/DErWOe9yvwB/", name: "Instagram" },
  ]

  return (
    <nav className='flex flex-wrap items-center justify-between py-6 px-20'>
      <div className='flex flex-shrink-0 items-center'>
        <a href='/' className='sm:-ml-4 md:-ml-3'><DevanagariA /></a>
      </div>
      <div className='flex items-center space-x-7'>
       
        <div className='relative' ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className='flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none md:hidden transition-colors duration-200'
            aria-label="Toggle social links"
          >
            <Menu size={24} className={`transform transition-transform duration-200 ${isOpen ? 'rotate-90' : 'rotate-0'}`} />
          </button>
          <div 
            className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 md:hidden
              transition-all duration-200 ease-in-out origin-top-right
              ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}
            `}
            onTransitionEnd={() => setIsAnimating(false)}
          >
            <div className='p-2 grid grid-cols-4 gap-2' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 
                    hover:bg-gray-200 transition-all duration-200
                    ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}
                  `}
                  style={{
                    transitionDelay: `${isOpen ? index * 50 : 0}ms`
                  }}
                  title={link.name}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          <div className='hidden md:flex items-center justify-center gap-4 lg:gap-6 text-2xl'>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className='text-white-700 hover:text-gray-600 transition-colors duration-200'
              >
                <link.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar