import React from 'react';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import { CreditCard, Truck, ShieldCheck, ArrowLeft } from 'lucide-react';

interface CheckoutProps {
  onBack: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ onBack }) => {
  const { cart, subtotal } = useCart();
  const { formatPrice } = useCurrency();
  const shipping = subtotal > 150 ? 0 : 15;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-luxury-cream py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 hover:text-luxury-velvet transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Back to Boutique
        </button>

        <h1 className="text-4xl md:text-5xl font-script text-luxury-velvet text-center mb-12">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Forms */}
          <div className="lg:col-span-2 space-y-8">
            {/* Section 1: Shipping Details */}
            <div className="bg-white p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <Truck className="text-luxury-velvet" size={20} />
                <h2 className="text-lg uppercase tracking-widest font-semibold">Shipping Details</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400">First Name</label>
                  <input type="text" className="w-full border-b border-gray-200 py-2 outline-none focus:border-luxury-velvet transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400">Last Name</label>
                  <input type="text" className="w-full border-b border-gray-200 py-2 outline-none focus:border-luxury-velvet transition-colors" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400">Address</label>
                  <input type="text" className="w-full border-b border-gray-200 py-2 outline-none focus:border-luxury-velvet transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400">City</label>
                  <input type="text" className="w-full border-b border-gray-200 py-2 outline-none focus:border-luxury-velvet transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400">Postal Code</label>
                  <input type="text" className="w-full border-b border-gray-200 py-2 outline-none focus:border-luxury-velvet transition-colors" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400">Contact Number</label>
                  <input type="tel" className="w-full border-b border-gray-200 py-2 outline-none focus:border-luxury-velvet transition-colors" />
                </div>
              </div>
            </div>

            {/* Section 2: Payment Method */}
            <div className="bg-white p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="text-luxury-velvet" size={20} />
                <h2 className="text-lg uppercase tracking-widest font-semibold">Payment Method</h2>
              </div>
              
              <div className="border-2 border-gray-100 p-6 rounded-lg opacity-60 cursor-not-allowed bg-gray-50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Pay with PayFast</p>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest">Coming Soon</p>
                    </div>
                  </div>
                  {/* PayFast Logo Placeholder */}
                  <div className="bg-white px-3 py-1 border border-gray-200 rounded text-[10px] font-bold text-blue-600 italic">
                    Pay<span className="text-red-600">Fast</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 font-light">
                  Secure payment processing via PayFast. This feature is currently being integrated for your protection.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-gray-400">
                <ShieldCheck size={16} />
                <span className="text-[10px] uppercase tracking-[0.2em]">Secure SSL Encrypted Checkout</span>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="space-y-8">
            <div className="bg-white p-8 shadow-sm border border-gray-100 sticky top-32">
              <h2 className="text-lg uppercase tracking-widest font-semibold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-8 max-h-64 overflow-y-auto pr-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-50 flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-medium uppercase text-[10px] tracking-wider truncate w-32">{item.name}</p>
                        <p className="text-gray-400 text-[10px]">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-serif text-luxury-velvet">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 border-t border-gray-100 pt-6">
                <div className="flex justify-between text-xs uppercase tracking-widest text-gray-500">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-xs uppercase tracking-widest text-gray-500">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-4">
                  <span className="text-sm uppercase tracking-[0.2em] font-bold">Total</span>
                  <span className="text-2xl font-serif text-luxury-velvet">{formatPrice(total)}</span>
                </div>
              </div>

              <button 
                disabled
                className="w-full bg-gray-200 text-gray-400 py-4 uppercase text-xs tracking-[0.3em] font-bold mt-8 cursor-not-allowed"
              >
                Complete Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
