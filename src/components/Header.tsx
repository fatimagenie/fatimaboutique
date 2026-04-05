import React, { useState } from 'react';
import { Search, User, ShoppingBag, MapPin, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'New In', href: '#' },
    { name: 'Makeup', href: '#', subItems: ['Face', 'Cheek', 'Eyes', 'Lips'] },
    { name: 'Skincare', href: '#' },
    { name: 'Fragrance', href: '#' },
    { name: 'Best Sellers', href: '#' },
    { name: 'Gifts', href: '#' },
    { name: 'Shade Match Tools', href: '#' },
  ];

  return (
    <header className="sticky-header shadow-sm">
      {/* Utility Top Bar */}
      <div className="bg-luxury-charcoal text-white text-[10px] uppercase tracking-widest py-2 px-4 md:px-8 flex justify-between items-center border-b border-white/10">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 hover:text-luxury-rosegold transition-colors">
            United States | USD $ <ChevronDown size={10} />
          </button>
          <a href="#" className="hidden sm:flex items-center gap-1 hover:text-luxury-rosegold transition-colors">
            <MapPin size={10} /> Store Locator
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-luxury-rosegold transition-colors">
            Glow Haven Darlings Loyalty Club
          </a>
        </div>
      </div>

      {/* Promotional Banner */}
      <div className="bg-luxury-crimson text-white text-[11px] py-1.5 px-4 text-center font-medium tracking-wider">
        <p>Use code <span className="font-bold">GLOW15</span> for 15% off + FREE shipping on your first order</p>
      </div>

      {/* Branding & Search Row */}
      <div className="bg-white border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
          {/* Search Bar (Left) */}
          <div className="hidden md:flex items-center">
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                placeholder="Search product, shade, colour"
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-transparent focus:border-luxury-rosegold focus:bg-white outline-none text-sm transition-all rounded-sm"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          {/* Mobile Menu Toggle (Left) */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(true)} className="text-luxury-charcoal">
              <Menu size={24} />
            </button>
          </div>

          {/* Logo (Center) */}
          <div className="text-center">
            <a href="/" className="inline-block">
              <h1 className="text-2xl md:text-4xl font-serif tracking-tighter text-luxury-charcoal">
                Glow Haven
              </h1>
            </a>
          </div>

          {/* Icons (Right) */}
          <div className="flex justify-end items-center gap-4 md:gap-6">
            <button className="hidden sm:flex flex-col items-center gap-0.5 group">
              <User size={22} className="group-hover:text-luxury-rosegold transition-colors" />
              <span className="text-[9px] uppercase tracking-tighter text-gray-500 group-hover:text-luxury-rosegold">Account</span>
            </button>
            <button className="flex flex-col items-center gap-0.5 group relative">
              <ShoppingBag size={22} className="group-hover:text-luxury-rosegold transition-colors" />
              <span className="text-[9px] uppercase tracking-tighter text-gray-500 group-hover:text-luxury-rosegold">Bag</span>
              <span className="absolute -top-1 -right-1 bg-luxury-crimson text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
            </button>
            <button className="md:hidden">
              <Search size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Menu */}
      <nav className="hidden md:block bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <ul className="flex justify-center items-center gap-8 py-3">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="text-[11px] uppercase tracking-[0.2em] font-medium text-luxury-charcoal hover:text-luxury-rosegold transition-colors py-2"
                >
                  {item.name}
                  {item.subItems && <ChevronDown size={10} className="inline ml-1" />}
                </a>
                
                {/* Mega Menu Placeholder Indicator */}
                {item.subItems && (
                  <div className="absolute top-full left-0 w-full h-0.5 bg-luxury-rosegold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Sidebar Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60]"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-white z-[70] p-6 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-serif">Glow Haven</h2>
                <button onClick={() => setIsMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>
              
              <ul className="space-y-6">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm uppercase tracking-widest font-medium flex justify-between items-center"
                    >
                      {item.name}
                      {item.subItems && <ChevronDown size={16} />}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-12 pt-8 border-t border-gray-100 space-y-4">
                <a href="#" className="flex items-center gap-3 text-sm text-gray-600">
                  <User size={20} /> My Account
                </a>
                <a href="#" className="flex items-center gap-3 text-sm text-gray-600">
                  <MapPin size={20} /> Store Locator
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
