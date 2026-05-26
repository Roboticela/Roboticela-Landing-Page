import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import { productLogos } from '../data/productLogos';

interface ProductLogoProps {
  name: string;
  icon: LucideIcon;
  className?: string;
}

export default function ProductLogo({ name, icon: Icon, className = '' }: ProductLogoProps) {
  const logo = productLogos[name];

  return (
    <div
      className={`bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors ${className}`}
    >
      {logo ? (
        <Image
          src={logo}
          alt={`${name} logo`}
          width={40}
          height={40}
          className="object-contain"
        />
      ) : (
        <Icon className="w-8 h-8 text-primary" />
      )}
    </div>
  );
}
