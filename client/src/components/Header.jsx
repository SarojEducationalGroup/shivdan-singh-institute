import React, { useState, useEffect, useRef } from 'react'; // Import useRef
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const navItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "/about", // Consider changing to a parent path like /about or removing if only subitems are navigable
    subItems: [
      { title: "About SSITM", path: "/about/about-ssitm" },
    ],
  },
  {
    title: "Courses",
    path: "/courses", // Consider changing to a parent path like /courses or removing if only subitems are navigable
    subItems: [
      { title: "Undergraduate", path: "/courses/undergrad" },
      { title: "Postgraduate", path: "/courses/postgrad" },
    ],
  },
  {
    title: "Admission",
    path: "/admission", // Consider changing to a parent path like /admission or removing if only subitems are navigable
    subItems: [
      { title: "Admission Process", path: "/admission/admission-process" },
      { title: "Eligibility Criteria", path: "/admission/eligibility" },
      { title: "Fee Structure", path: "/admission/fee-structure" },
    ],
  },

  {
    title: "Contact Us",
    path: "/contact-us",
  },

];


function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // Stores the index of the currently open desktop submenu
  const menuRef = useRef(null); // Ref for the desktop navigation container

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setOpenSubmenu(null); // Close any open desktop submenu
  };

  // Effect to handle clicks outside the desktop menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the clicked element is not within the menuRef (i.e., outside the desktop nav)
      // and a submenu is currently open, then close it.
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenSubmenu(null); // Close the desktop submenu
      }
    };

    // Add event listener when component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openSubmenu]); // Re-run effect if openSubmenu state changes

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Main header container */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeAllMenus}>
            <img src={logo} alt="SSITM logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          {/* Apply the ref here to the container that holds all desktop nav items */}
          <ul className="hidden md:flex space-x-6 text-md items-center" ref={menuRef}>
            {navItems.map((item, index) => (
              <li key={item.path} className="relative group">
                {item.subItems ? (
                  <div className="relative">
                    <button
                      // Use onMouseEnter to open (as before)
                      onMouseEnter={() => setOpenSubmenu(index)}
                      // Add onFocus to handle keyboard navigation for accessibility
                      onFocus={() => setOpenSubmenu(index)}
                      className="flex items-center text-gray-700 hover:text-orange-500 transition-colors px-2 py-1"
                    >
                      {item.title}
                      <svg
                        className={`w-4 h-4 ml-1 transition-transform ${openSubmenu === index ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {/* Dropdown menu */}
                    <div
                      className={`absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100 transition-all duration-200 ${openSubmenu === index ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                      onMouseEnter={() => setOpenSubmenu(index)}
                      onMouseLeave={() => setOpenSubmenu(null)}
                    >
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-orange-500 transition-colors"
                          onClick={closeAllMenus}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Link
                      to={item.path}
                      className="text-gray-700 hover:text-orange-500 transition-colors px-2 py-1"
                      onClick={closeAllMenus}
                    >
                      {item.title}
                    </Link>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <ul className="pt-2 pb-4 space-y-1">
            {navItems.map((item, index) => (
              <li key={item.path}>
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className="flex items-center justify-between w-full px-3 py-3 rounded-md hover:bg-gray-50 text-left"
                    >
                      <span>{item.title}</span>
                      <svg
                        className={`w-5 h-5 transform transition-transform ${openSubmenu === index ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openSubmenu === index ? 'max-h-96' : 'max-h-0'}`}>
                      <ul className="pl-4 mt-1 space-y-1">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.path}>
                            <Link
                              to={subItem.path}
                              className="block px-3 py-3 rounded-md hover:bg-gray-50"
                              onClick={closeAllMenus}
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="block px-3 py-3 rounded-md hover:bg-gray-50"
                    onClick={closeAllMenus}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;