import React, { useState } from 'react';
import { Search, User, ShoppingBag as BagIcon, MapPin, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import ShoppingBag from './ShoppingBag';
import BrandLogo from './BrandLogo';

interface HeaderProps {
  onCheckout: () => void;
  onLoyaltyClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCheckout, onLoyaltyClick }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems, setIsBagOpen } = useCart();
  const { currency, setCurrency } = useCurrency();

  const navItems = [
    { name: 'New In', href: '#' },
    { 
      name: 'Makeup', 
      href: '#', 
      megaMenu: {
        columns: [
          { title: 'Face', items: ['Foundation', 'Primer', 'Concealer', 'Powder', 'Setting Spray'] },
          { title: 'Cheek', items: ['Blush', 'Bronzer', 'Highlighter', 'Contour'] },
          { title: 'Eyes', items: ['Eyeshadow', 'Mascara', 'Eyeliner', 'Eyebrow Makeup'] },
          { title: 'Lips', items: ['Lipstick', 'Lip Gloss', 'Lip Liner', 'Lip Kits'] },
          { title: 'Featured', items: ['Shop All Makeup', 'Magical Savings'], isFeatured: true },
        ]
      }
    },
    { 
      name: 'Skincare', 
      href: '#', 
      megaMenu: {
        columns: [
          { title: 'Category', items: ['Cleanser', 'Toner', 'Serum', 'Moisturizer', 'Eye Cream'] },
          { title: 'Shop By', items: ['Skincare Ingredient', 'Skin Concern'] },
        ]
      }
    },
    { name: 'Fragrance', href: '#' },
    { name: 'Best Sellers', href: '#' },
    { name: 'Gifts', href: '#' },
    { 
      name: 'Shade Match Tools', 
      href: '#',
      megaMenu: {
        columns: [
          { title: 'Tools', items: ['Foundation Shade Finder', 'Lipstick Shade Finder'] },
        ]
      }
    },
  ];

  return (
    <header className="sticky-header shadow-sm" onMouseLeave={() => setActiveMenu(null)}>
      <ShoppingBag onCheckout={onCheckout} />
      {/* Utility Top Bar */}
      <div className="bg-luxury-charcoal text-white text-[10px] uppercase tracking-widest py-2 px-4 md:px-8 flex justify-between items-center border-b border-white/10">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 border-r border-white/20 pr-4">
            <button 
              onClick={() => setCurrency('PKR')}
              className={`hover:text-luxury-gold transition-colors ${currency === 'PKR' ? 'text-luxury-gold font-bold' : ''}`}
            >
              PKR (₨)
            </button>
            <span className="text-white/20">|</span>
            <button 
              onClick={() => setCurrency('USD')}
              className={`hover:text-luxury-gold transition-colors ${currency === 'USD' ? 'text-luxury-gold font-bold' : ''}`}
            >
              USD ($)
            </button>
          </div>
          <a href="#" className="hidden sm:flex items-center gap-1 hover:text-luxury-gold transition-colors">
            <MapPin size={10} /> Store Locator
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" onClick={(e) => { e.preventDefault(); onLoyaltyClick(); }} className="hover:text-luxury-gold transition-colors">
            Fatima's Darlings Loyalty Club
          </a>
        </div>
      </div>

      {/* Promotional Banner */}
      <div className="bg-luxury-velvet-light text-white text-[11px] py-1.5 px-4 text-center font-medium tracking-wider">
        <p>Enjoy <span className="font-bold">FREE SHIPPING</span> and exclusive samples on your first order</p>
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
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-transparent focus:border-luxury-velvet focus:bg-white outline-none text-sm transition-all rounded-sm"
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
            <a href="/" className="inline-block group">
              <BrandLogo />
            </a>
          </div>

          {/* Icons (Right) */}
          <div className="flex justify-end items-center gap-4 md:gap-6">
            <button className="hidden sm:flex flex-col items-center gap-0.5 group">
              <User size={22} className="group-hover:text-luxury-velvet transition-colors" />
              <span className="text-[9px] uppercase tracking-tighter text-gray-500 group-hover:text-luxury-velvet">Account</span>
            </button>
            <button 
              onClick={() => setIsBagOpen(true)}
              className="flex flex-col items-center gap-0.5 group relative"
            >
              <BagIcon size={22} className="group-hover:text-luxury-velvet transition-colors" />
              <span className="text-[9px] uppercase tracking-tighter text-gray-500 group-hover:text-luxury-velvet">Bag</span>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-luxury-crimson text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
            <button className="md:hidden">
              <Search size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Menu */}
      <nav className="hidden md:block bg-white border-b border-gray-100 relative">
        <div className="max-w-7xl mx-auto">
          <ul className="flex justify-center items-center gap-8 py-3">
            {navItems.map((item) => (
              <li 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => setActiveMenu(item.megaMenu ? item.name : null)}
              >
                <a
                  href={item.href}
                  className="text-[11px] uppercase tracking-[0.2em] font-medium text-luxury-charcoal hover:text-luxury-velvet transition-colors py-2 flex items-center gap-1"
                >
                  {item.name}
                  {item.megaMenu && <ChevronDown size={10} className={`transition-transform duration-300 ${activeMenu === item.name ? 'rotate-180' : ''}`} />}
                </a>
                
                {/* Underline Indicator */}
                <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-luxury-velvet transition-transform duration-300 origin-left ${activeMenu === item.name ? 'scale-x-100' : 'scale-x-0'}`} />
              </li>
            ))}
          </ul>
        </div>

        {/* Mega Menu Panel */}
        <AnimatePresence>
          {activeMenu && navItems.find(i => i.name === activeMenu)?.megaMenu && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute top-full left-0 w-full bg-luxury-cream border-b border-gray-100 shadow-xl z-50 py-12 px-8"
              onMouseEnter={() => setActiveMenu(activeMenu)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="max-w-7xl mx-auto grid grid-cols-5 gap-8">
                {navItems.find(i => i.name === activeMenu)?.megaMenu?.columns.map((column, idx) => (
                  <div key={idx} className={`${column.isFeatured ? 'bg-white/50 p-6 rounded-sm' : ''}`}>
                    <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-luxury-velvet mb-6 border-b border-luxury-velvet/10 pb-2">
                      {column.title}
                    </h3>
                    <ul className="space-y-3">
                      {column.items.map((subItem, sIdx) => (
                        <li key={sIdx}>
                          <a 
                            href="#" 
                            className="text-[11px] uppercase tracking-widest text-gray-600 hover:text-luxury-velvet hover:translate-x-1 transition-all inline-block"
                          >
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
                <BrandLogo size="sm" className="!items-start" />
                <button onClick={() => setIsMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>
              
              <ul className="space-y-6">
                {navItems.map((item) => (
                  <li key={item.name} className="border-b border-gray-50 pb-4 last:border-0">
                    <div 
                      className="text-sm uppercase tracking-widest font-medium flex justify-between items-center cursor-pointer hover:text-luxury-velvet transition-colors"
                      onClick={() => setActiveMenu(activeMenu === item.name ? null : item.name)}
                    >
                      {item.name}
                      {item.megaMenu && <ChevronDown size={16} className={`transition-transform duration-300 ${activeMenu === item.name ? 'rotate-180' : ''}`} />}
                    </div>
                    
                    {/* Mobile Sub-menu */}
                    <AnimatePresence>
                      {activeMenu === item.name && item.megaMenu && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 pl-4 space-y-6">
                            {item.megaMenu.columns.map((column, cIdx) => (
                              <div key={cIdx}>
                                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-velvet mb-3">
                                  {column.title}
                                </h4>
                                <ul className="space-y-2">
                                  {column.items.map((subItem, sIdx) => (
                                    <li key={sIdx}>
                                      <a href="#" className="text-xs text-gray-500 hover:text-luxury-velvet transition-colors">
                                        {subItem}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                ))}
              </ul>

              <div className="mt-12 pt-8 border-t border-gray-100 space-y-6">
                <div className="flex items-center gap-4 text-sm uppercase tracking-widest font-medium">
                  <span className="text-gray-400">Currency:</span>
                  <button 
                    onClick={() => setCurrency('PKR')}
                    className={currency === 'PKR' ? 'text-luxury-velvet font-bold' : 'text-gray-600'}
                  >
                    PKR
                  </button>
                  <button 
                    onClick={() => setCurrency('USD')}
                    className={currency === 'USD' ? 'text-luxury-velvet font-bold' : 'text-gray-600'}
                  >
                    USD
                  </button>
                </div>
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
