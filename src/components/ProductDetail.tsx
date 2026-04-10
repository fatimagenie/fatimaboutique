import React, { useState, useEffect } from 'react';
import { ChevronDown, Plus, Minus, ShoppingBag, ShieldCheck, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import BrandLogo from './BrandLogo';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  const [activeTab, setActiveTab] = useState<string | null>('How to Apply');
  const [quantity, setQuantity] = useState(1);
  const { addToCart, setIsBagOpen } = useCart();
  const { formatPrice } = useCurrency();

  // Simulate Meta Pixel ViewContent event
  useEffect(() => {
    console.log(`[Meta Pixel Triggered]: ViewContent | Product ID: ${product.id} | Name: ${product.name}`);
    // If the actual Meta Pixel script was loaded, we would call:
    // if (typeof window !== 'undefined' && (window as any).fbq) {
    //   (window as any).fbq('track', 'ViewContent', { content_name: product.name, content_ids: [product.id], content_type: 'product', value: product.price, currency: 'USD' });
    // }
  }, [product]);

  const handleAddToBag = () => {
    // Add product to cart 'quantity' times, or update cart function if it supports quantity.
    // For now we'll call addToCart repeatedly or update the context if needed. 
    // Since existing addToCart takes product, we'll just fire it once for simplicity or we can fire multiple times.
    for (let i = 0; i < quantity; i++) {
        addToCart(product);
    }
    setIsBagOpen(true);

    // Simulate Meta Pixel AddToCart event
    console.log(`[Meta Pixel Triggered]: AddToCart | Product ID: ${product.id} | Quantity: ${quantity} | Name: ${product.name}`);
  };

  const tabs = [
    {
      id: 'How to Apply',
      title: 'How to Apply',
      content: 'Using your fingertips or a luxury buffing brush, gently sweep the formula across the high points of your face. Blend outwards in a heart-shaped motion for that flawless, airbrushed, lit-from-within glow. For ultimate radiance, layer over our Magic Moisture formula.'
    },
    {
      id: 'Ingredients',
      title: 'Ingredients',
      content: 'Infused with our patented Bio-Nymph Peptide Complex, crushed pearl particulates, and deeply hydrating hyaluronic acid. Formulated without parabens, sulfates, or phthalates. 100% cruelty-free and dermatologically tested for the most delicate complexions.'
    },
    {
      id: 'Shipping & Returns',
      title: 'Shipping & Returns',
      content: 'Enjoy complimentary express shipping on all orders over ₨ 15,000 / $50. If you are not entirely delighted with your purchase, we accept returns within 30 days of receipt in their original condition.'
    }
  ];

  return (
    <div className="bg-luxury-cream min-h-screen py-8 md:py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 hover:text-luxury-velvet transition-colors mb-8 md:mb-12"
        >
          <ArrowLeft size={16} /> Back to Boutique
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Side: Image Gallery */}
          <div className="relative w-full aspect-[4/5] bg-gray-100 overflow-hidden cursor-crosshair">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-[1.5s] hover:scale-125"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Right Side: Sticky Details */}
          <div className="relative">
            <div className="sticky top-24">
              
              <div className="mb-8 flex justify-between items-start">
                 <BrandLogo size="sm" className="!items-start opacity-80" />
              </div>

              <h1 className="text-4xl md:text-5xl font-display text-luxury-charcoal leading-tight mb-4 tracking-tight">
                {product.name}
              </h1>
              
              <p className="text-2xl font-serif text-luxury-velvet mb-6">
                {formatPrice(product.price)}
              </p>

              {/* Magical Savings Badge */}
              <div className="bg-[#FFF4F4] border border-[#FFD6D6] rounded-sm p-4 mb-8 flex items-start gap-3 shadow-sm">
                <ShieldCheck className="text-luxury-velvet shrink-0" size={20} />
                <div>
                  <p className="text-sm font-bold text-luxury-velvet uppercase tracking-wide">Magical Savings</p>
                  <p className="text-xs text-gray-700 mt-1">Save 15% on your first order with code <span className="font-bold bg-white px-2 py-0.5 border border-gray-200 ml-1">FATIMA15</span></p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4 mb-10">
                <div className="flex items-center border border-gray-300 rounded-sm">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:text-luxury-velvet transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center text-sm font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:text-luxury-velvet transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                
                <button 
                  onClick={handleAddToBag}
                  className="flex-1 bg-luxury-velvet text-white py-4 uppercase text-xs tracking-[0.2em] font-bold hover:bg-luxury-crimson transition-all flex justify-center items-center gap-2"
                >
                  <ShoppingBag size={16} /> Add to Bag - {formatPrice(product.price * quantity)}
                </button>
              </div>

              {/* Expert Pillar / Authority Tabs */}
              <div className="border-t border-gray-200 pt-2">
                {tabs.map((tab) => (
                  <div key={tab.id} className="border-b border-gray-200">
                    <button
                      onClick={() => setActiveTab(activeTab === tab.id ? null : tab.id)}
                      className="w-full py-5 flex justify-between items-center text-left hover:text-luxury-velvet transition-colors"
                    >
                      <span className="uppercase text-xs tracking-widest font-bold">{tab.title}</span>
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-300 ${activeTab === tab.id ? 'rotate-180 text-luxury-velvet' : 'text-gray-400'}`} 
                      />
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${activeTab === tab.id ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
                    >
                      <p className="text-sm text-gray-600 leading-relaxed font-light">
                        {tab.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
