import React, { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header>
        <nav className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-50 flex justify-between py-4">
            <div className="flex items-center">
              <a aria-label="Home" className="text-white" href="/">
                MomentumBot
              </a>
            </div>
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-200 focus:outline-none"
                aria-label="Toggle site navigation"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M3 12h18M3 6h18M3 18h18"></path>
                </svg>
              </button>
            </div>
            <div className={`lg:flex lg:items-center ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
              <div className="lg:flex lg:gap-6">
                <a href="/#" className="text-gray-200 hover:text-white">
                  Docs
                </a>
                <a href="/#" className="text-gray-200 hover:text-white">
                  Pitchdeck
                </a>
                <a href="/#features" className="text-gray-200 hover:text-white">
                  Features
                </a>
                <a href="/#token" className="text-gray-200 hover:text-white">
                  Tokenomics
                </a>
                <a href="/#faqs" className="text-gray-200 hover:text-white">
                  FAQs
                </a>
              </div>
              <div className="flex items-center gap-6">
                <a href="https://twitter.com/momentumbotx" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  {/* Add Twitter icon or image */}
                </a>
                <a href="https://t.me/momentumbotchat" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
                  <span className="sr-only">Telegram</span>
                  {/* Add Telegram icon or image */}
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
