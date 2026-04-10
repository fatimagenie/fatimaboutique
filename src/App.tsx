import React, { useState } from 'react';
import Header from './components/Header';
import Checkout from './components/Checkout';
import ProductDetail from './components/ProductDetail';
import { CartProvider, useCart } from './context/CartContext';
import { CurrencyProvider, useCurrency } from './context/CurrencyContext';
import { Sparkles, Award, Zap, Truck, Gift, Star, Video, ShoppingBag } from 'lucide-react';

const products = [
  { id: 1, name: "Fatima's Glow Serum", price: 45.00, image: "https://picsum.photos/seed/beauty1/800/1000" },
  { id: 2, name: "Velvet Lip Crimson", price: 32.00, image: "https://picsum.photos/seed/beauty2/800/1000" },
  { id: 3, name: "Radiant Eye Palette", price: 58.00, image: "https://picsum.photos/seed/beauty3/800/1000" },
  { id: 4, name: "Silk Foundation", price: 65.00, image: "https://picsum.photos/seed/beauty4/800/1000" },
  { id: 5, name: "Midnight Fragrance", price: 120.00, image: "https://picsum.photos/seed/beauty5/800/1000" },
  { id: 6, name: "Hydra Mist", price: 28.00, image: "https://picsum.photos/seed/beauty6/800/1000" },
];

const trendingProducts = [
  { id: 7, name: "Magic Cream Moisturizer", price: 100.00, image: "https://picsum.photos/seed/beauty7/800/1000" },
  { id: 8, name: "Pillow Talk Lipstick", price: 35.00, image: "https://picsum.photos/seed/beauty8/800/1000" },
  { id: 9, name: "Airbrush Flawless Foundation", price: 49.00, image: "https://picsum.photos/seed/beauty9/800/1000" },
  { id: 10, name: "Hollywood Flawless Filter", price: 49.00, image: "https://picsum.photos/seed/beauty10/800/1000" },
];

function AppContent() {
  const [view, setView] = useState<'home' | 'checkout' | 'pdp'>('home');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const { addToCart, setIsBagOpen } = useCart();
  const { formatPrice } = useCurrency();

  if (view === 'checkout') {
    return <Checkout onBack={() => setView('home')} />;
  }

  if (view === 'pdp' && selectedProduct) {
    return <ProductDetail product={selectedProduct} onBack={() => setView('home')} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header onCheckout={() => {
        setView('checkout');
        setIsBagOpen(false);
      }} />
      
      <main className="flex-grow">
        {/* Hero Section Placeholder */}
        <section className="relative h-[70vh] bg-luxury-cream overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=1920" 
            alt="Luxury Beauty Hero" 
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-cream/80 to-transparent flex items-center px-8 md:px-24">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
                The Secret to <br />
                <span className="text-luxury-velvet italic">Radiant Beauty</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 font-light tracking-wide">
                Discover our award-winning collection of skincare and makeup designed to make you glow from within.
              </p>
              <button className="bg-luxury-charcoal text-white px-10 py-4 uppercase text-xs tracking-[0.3em] hover:bg-luxury-crimson transition-colors">
                Shop the Collection
              </button>
            </div>
          </div>
        </section>

        {/* Authority Section */}
        <section className="bg-white py-12 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-8">
            <h3 className="text-center text-luxury-velvet uppercase tracking-[0.3em] text-sm font-bold mb-10">
              Legendary Beauty For A Reason
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-full bg-luxury-cream flex items-center justify-center mb-4 group-hover:bg-luxury-velvet group-hover:text-white transition-colors duration-300">
                  <Sparkles size={24} />
                </div>
                <p className="text-[10px] uppercase tracking-widest font-bold">Fashion & Beauty Curators</p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-full bg-luxury-cream flex items-center justify-center mb-4 group-hover:bg-luxury-velvet group-hover:text-white transition-colors duration-300">
                  <Award size={24} />
                </div>
                <p className="text-[10px] uppercase tracking-widest font-bold">Luxury Performance Products</p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-full bg-luxury-cream flex items-center justify-center mb-4 group-hover:bg-luxury-velvet group-hover:text-white transition-colors duration-300">
                  <Zap size={24} />
                </div>
                <p className="text-[10px] uppercase tracking-widest font-bold">Style Innovators</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-serif mb-4">New Arrivals</h3>
            <div className="w-24 h-0.5 bg-luxury-velvet mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer" onClick={() => { setSelectedProduct(product); setView('pdp'); }}>
                <div className="relative aspect-[4/5] bg-gray-100 mb-4 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      className="w-full bg-white text-luxury-charcoal py-3 uppercase text-[10px] tracking-[0.2em] font-bold hover:bg-luxury-velvet hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
                    >
                      Add to Bag
                    </button>
                  </div>
                </div>
                <h4 className="text-sm uppercase tracking-widest mb-1">{product.name}</h4>
                <p className="text-luxury-velvet font-serif">{formatPrice(product.price)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Trending Now Grid */}
        <section className="py-24 bg-luxury-cream">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h3 className="text-3xl font-serif text-luxury-velvet">Trending Now</h3>
                <div className="w-24 h-0.5 bg-luxury-velvet mt-4"></div>
              </div>
              <a href="#" className="text-[10px] uppercase tracking-widest font-bold border-b border-luxury-velvet pb-1 hover:text-luxury-velvet transition-colors">
                Shop All Trending
              </a>
            </div>
            
            <div className="flex overflow-x-auto gap-8 pb-8 scrollbar-hide">
              {trendingProducts.map((product) => (
                <div key={product.id} className="min-w-[280px] md:min-w-[300px] group bg-white p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer" onClick={() => { setSelectedProduct(product); setView('pdp'); }}>
                  <div className="relative aspect-[4/5] bg-gray-50 mb-4 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      className="absolute bottom-0 left-0 w-full bg-luxury-velvet text-white py-3 uppercase text-[10px] tracking-[0.2em] font-bold transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2"
                    >
                      <ShoppingBag size={14} /> Add to Bag
                    </button>
                  </div>
                  <h4 className="text-[11px] uppercase tracking-widest mb-1 font-bold truncate">{product.name}</h4>
                  <p className="text-luxury-velvet font-serif">{formatPrice(product.price)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-luxury-charcoal text-white py-24 px-8 text-center">
          <h3 className="text-4xl font-serif mb-6 italic">Fatima's Darlings</h3>
          <p className="max-w-2xl mx-auto text-gray-400 mb-10 font-light tracking-wide">
            Join our loyalty club for exclusive access to new launches, birthday treats, and pro-artist tips.
          </p>
          <button className="border border-white px-10 py-4 uppercase text-xs tracking-[0.3em] hover:bg-white hover:text-luxury-charcoal transition-all">
            Join the Club
          </button>
        </section>

        {/* Trust Signals Footer */}
        <section className="bg-white py-16 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="flex flex-col items-center text-center">
              <Truck className="text-luxury-velvet mb-4" size={28} />
              <h4 className="text-[11px] uppercase tracking-widest font-bold mb-2">Free Delivery</h4>
              <p className="text-[10px] text-gray-500 uppercase tracking-tighter">Over ₨ 15,000 / $50</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Gift className="text-luxury-velvet mb-4" size={28} />
              <h4 className="text-[11px] uppercase tracking-widest font-bold mb-2">2 Free Samples</h4>
              <p className="text-[10px] text-gray-500 uppercase tracking-tighter">With every order</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Star className="text-luxury-velvet mb-4" size={28} />
              <h4 className="text-[11px] uppercase tracking-widest font-bold mb-2">Fatima's Darlings</h4>
              <p className="text-[10px] text-gray-500 uppercase tracking-tighter">Unlock Loyalty Rewards</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Video className="text-luxury-velvet mb-4" size={28} />
              <h4 className="text-[11px] uppercase tracking-widest font-bold mb-2">Online Consultation</h4>
              <p className="text-[10px] text-gray-500 uppercase tracking-tighter">Book a 1:1 Session</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-12 border-t border-gray-100 text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400">
          © 2026 Fatima Boutique. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <CurrencyProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </CurrencyProvider>
  );
}
