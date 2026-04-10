import React from 'react';
import { X, Plus, Minus, ShoppingBag as BagIcon, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';

interface ShoppingBagProps {
  onCheckout: () => void;
}

const ShoppingBag: React.FC<ShoppingBagProps> = ({ onCheckout }) => {
  const { cart, subtotal, updateQuantity, removeFromCart, isBagOpen, setIsBagOpen } = useCart();
  const { formatPrice } = useCurrency();
  const shippingThreshold = 150;
  const amountToFreeShipping = Math.max(0, shippingThreshold - subtotal);

  return (
    <AnimatePresence>
      {isBagOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsBagOpen(false)}
            className="fixed inset-0 bg-black/40 z-[100] backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-[110] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-luxury-cream">
              <div className="flex items-center gap-3">
                <BagIcon size={20} className="text-luxury-velvet" />
                <h2 className="text-xl font-script text-luxury-velvet">Your Shopping Bag</h2>
              </div>
              <button onClick={() => setIsBagOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Free Shipping Message */}
            <div className="bg-luxury-velvet-light text-white py-3 px-6 text-center text-xs tracking-wider">
              {amountToFreeShipping > 0 ? (
                <p>Spend <span className="font-bold">{formatPrice(amountToFreeShipping)}</span> more for <span className="font-bold uppercase">FREE shipping!</span></p>
              ) : (
                <p className="font-bold uppercase">You've unlocked FREE shipping!</p>
              )}
            </div>

            {/* Cart Items */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                  <BagIcon size={48} strokeWidth={1} />
                  <p className="font-light tracking-widest uppercase text-sm">Your bag is empty</p>
                  <button 
                    onClick={() => setIsBagOpen(false)}
                    className="text-luxury-velvet border-b border-luxury-velvet pb-1 text-xs uppercase tracking-widest font-medium"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-24 h-32 bg-gray-50 overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-grow flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="text-sm font-medium uppercase tracking-wider text-luxury-charcoal pr-4">{item.name}</h3>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-300 hover:text-luxury-crimson transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-luxury-velvet font-serif mt-1">{formatPrice(item.price)}</p>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-gray-200">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 hover:bg-gray-50"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 hover:bg-gray-50"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-luxury-cream space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-[0.2em] font-medium text-gray-500">Subtotal</span>
                  <span className="text-xl font-serif text-luxury-velvet">{formatPrice(subtotal)}</span>
                </div>
                <p className="text-[10px] text-gray-400 italic text-center">Shipping and taxes calculated at checkout</p>
                <button 
                  onClick={onCheckout}
                  className="w-full bg-luxury-velvet text-white py-4 uppercase text-xs tracking-[0.3em] font-bold hover:bg-luxury-velvet-light transition-all shadow-lg"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ShoppingBag;
