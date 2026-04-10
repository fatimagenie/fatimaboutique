import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'base';
}

/**
 * BRAND IDENTITY LOCKDOWN: Fatima Boutique Logo
 * Source of Truth for brand identity.
 * DO NOT MODIFY this file or the styling within it.
 * 
 * Specifications:
 * - Font: Great Vibes (font-script)
 * - Color: Velvet Red #660000 (text-luxury-velvet)
 * - Alignment: 'Boutique' aligned under 'ma' at 60% size
 */
const BrandLogo: React.FC<BrandLogoProps> = ({ className = "", size = 'base' }) => {
  const mainSize = size === 'sm' ? 'text-2xl' : 'text-3xl md:text-5xl';
  const subSize = size === 'sm' ? 'text-[14px] -bottom-3' : 'text-[18px] md:text-[30px] -bottom-4 md:-bottom-6';

  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      <div className={`font-script ${mainSize} text-luxury-velvet leading-none`}>
        <span>Fati</span>
        <span className="relative inline-block">
          ma
          <span className={`absolute left-0 w-full ${subSize} font-script text-luxury-velvet tracking-normal text-center whitespace-nowrap`}>
            Boutique
          </span>
        </span>
      </div>
    </div>
  );
};

export default BrandLogo;
