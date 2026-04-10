import React, { useEffect } from 'react';
import { Gift, Video, Sparkles, ArrowLeft, Star, Heart, Calendar } from 'lucide-react';
import BrandLogo from './BrandLogo';

interface LoyaltyPageProps {
  onBack: () => void;
}

const LoyaltyPage: React.FC<LoyaltyPageProps> = ({ onBack }) => {
  useEffect(() => {
    console.log(`[Meta Pixel Triggered]: ViewLoyaltyPage | Category: Loyalty & Rewards`);
    // Simulated Meta Pixel call
    // if (typeof window !== 'undefined' && (window as any).fbq) {
    //   (window as any).fbq('trackCustom', 'ViewLoyaltyPage', { category: 'Loyalty & Rewards' });
    // }
  }, []);

  return (
    <div className="bg-luxury-cream min-h-screen">
      {/* Navigation Top Bar inside the page (optional, but good for UX) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 flex justify-between items-center border-b border-gray-200/50">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 hover:text-luxury-velvet transition-colors"
        >
          <ArrowLeft size={16} /> Back to Boutique
        </button>
        <BrandLogo size="sm" />
        <div className="w-24"></div> {/* Spacer to center logo */}
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 sm:px-8 text-center bg-white overflow-hidden">
        {/* Subtle Background Pattern/Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-cream/40 to-white pointer-events-none"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="flex justify-center mb-6">
            <Star className="text-luxury-gold fill-luxury-gold/20" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-luxury-charcoal mb-6 leading-tight italic">
            Darling, unlock your perfect makeup matches with me!
          </h1>
          
          <div className="bg-[#FFF4F4] border border-[#FFD6D6] rounded-sm p-6 mb-10 max-w-xl mx-auto shadow-sm">
            <p className="text-sm font-bold text-luxury-velvet uppercase tracking-wider mb-2">
              The Magic Hook
            </p>
            <p className="text-base text-gray-800 font-medium">
              Create an account or log in to unlock <span className="text-luxury-velvet font-bold">Exclusive Early Access</span> + <span className="font-bold underline decoration-luxury-velvet/30 underline-offset-4">FREE SHIPPING</span>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-luxury-velvet text-white px-12 py-4 uppercase text-xs tracking-[0.2em] font-bold hover:bg-luxury-crimson transition-all shadow-md hover:shadow-lg">
              Create Account
            </button>
            <button className="w-full sm:w-auto bg-white border-2 border-luxury-velvet text-luxury-velvet px-12 py-3.5 uppercase text-xs tracking-[0.2em] font-bold hover:bg-luxury-cream transition-all shadow-sm hover:shadow">
              Log In
            </button>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-6">
            Join Fatima's Darlings Loyalty Club today.
          </p>
        </div>
      </section>

      {/* Loyalty Benefits Grid */}
      <section className="py-20 md:py-28 px-4 sm:px-8 bg-luxury-cream border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-serif text-luxury-charcoal mb-4">Your Exclusive Pillars</h3>
            <div className="w-24 h-0.5 bg-luxury-velvet mx-auto"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto font-light tracking-wide">
              Step into a world of cosmetic magic. Being a Darling means unparalleled access to our luxurious universe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Benefit 1 */}
            <div className="bg-white p-10 text-center shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-50 aspect-square flex flex-col justify-center">
              <div className="w-16 h-16 mx-auto bg-luxury-cream rounded-full flex items-center justify-center mb-8 group-hover:bg-luxury-velvet group-hover:text-white transition-colors duration-500">
                <Gift size={28} className="text-luxury-velvet group-hover:text-white" />
              </div>
              <h4 className="text-sm uppercase tracking-widest font-bold mb-4">2 Free Samples</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Discover new magic with every purchase. Select 2 complimentary samples at checkout with every single order.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-10 text-center shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-50 aspect-square flex flex-col justify-center">
              <div className="w-16 h-16 mx-auto bg-luxury-cream rounded-full flex items-center justify-center mb-8 group-hover:bg-luxury-velvet group-hover:text-white transition-colors duration-500">
                <Heart size={28} className="text-luxury-velvet group-hover:text-white" />
              </div>
              <h4 className="text-sm uppercase tracking-widest font-bold mb-4">Birthday Magic & Gifts</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Celebrate your special day with an exclusive birthday gift and early access to our limited-edition kits.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-10 text-center shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-50 aspect-square flex flex-col justify-center">
              <div className="w-16 h-16 mx-auto bg-luxury-cream rounded-full flex items-center justify-center mb-8 group-hover:bg-luxury-velvet group-hover:text-white transition-colors duration-500">
                <Video size={28} className="text-luxury-velvet group-hover:text-white" />
              </div>
              <h4 className="text-sm uppercase tracking-widest font-bold mb-4">1:1 Online Consultation</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Unlock your perfect shade match with our Pro Artists through complimentary virtual beauty sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Artist & Services Section */}
      <section className="bg-luxury-charcoal text-white py-24 px-4 sm:px-8 border-t-4 border-luxury-velvet relative overflow-hidden">
        {/* Subtle watermark image or pattern could go here */}
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none transform translate-x-1/3 -translate-y-1/3">
          <Sparkles size={400} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 italic text-luxury-cream">
            Experience Pro Artistry
          </h2>
          <p className="text-gray-400 mb-10 text-lg font-light tracking-wide max-w-2xl mx-auto">
            Ready for a red-carpet transformation? Whether in-store or curled up at home, book a personal session with our global beauty experts. 
          </p>
          
          <button className="bg-luxury-gold text-luxury-charcoal px-10 py-4 uppercase text-xs tracking-[0.2em] font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center justify-center gap-3 mx-auto">
            <Calendar size={18} />
            Book An Appointment
          </button>
        </div>
      </section>

    </div>
  );
};

export default LoyaltyPage;
