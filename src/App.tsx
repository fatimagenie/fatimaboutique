import React, { useState } from 'react';
import Header from './components/Header';
import Checkout from './components/Checkout';
import { CartProvider, useCart } from './context/CartContext';
import { CurrencyProvider, useCurrency } from './context/CurrencyContext';

const products = [
  { id: 1, name: "Glow Serum Gold", price: 45.00, image: "https://picsum.photos/seed/beauty1/800/1000" },
  { id: 2, name: "Velvet Lip Crimson", price: 32.00, image: "https://picsum.photos/seed/beauty2/800/1000" },
  { id: 3, name: "Radiant Eye Palette", price: 58.00, image: "https://picsum.photos/seed/beauty3/800/1000" },
  { id: 4, name: "Silk Foundation", price: 65.00, image: "https://picsum.photos/seed/beauty4/800/1000" },
  { id: 5, name: "Midnight Fragrance", price: 120.00, image: "https://picsum.photos/seed/beauty5/800/1000" },
  { id: 6, name: "Hydra Mist", price: 28.00, image: "https://picsum.photos/seed/beauty6/800/1000" },
];

function AppContent() {
  const [view, setView] = useState<'home' | 'checkout'>('home');
  const { addToCart, setIsBagOpen } = useCart();
  const { formatPrice } = useCurrency();

  if (view === 'checkout') {
    return <Checkout onBack={() => setView('home')} />;
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

        {/* Product Grid */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-serif mb-4">New Arrivals</h3>
            <div className="w-24 h-0.5 bg-luxury-velvet mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
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

        <section className="bg-luxury-charcoal text-white py-24 px-8 text-center">
          <h3 className="text-4xl font-serif mb-6 italic">Fatima's Darlings</h3>
          <p className="max-w-2xl mx-auto text-gray-400 mb-10 font-light tracking-wide">
            Join our loyalty club for exclusive access to new launches, birthday treats, and pro-artist tips.
          </p>
          <button className="border border-white px-10 py-4 uppercase text-xs tracking-[0.3em] hover:bg-white hover:text-luxury-charcoal transition-all">
            Join the Club
          </button>
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
