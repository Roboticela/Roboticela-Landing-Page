import Image from 'next/image';

interface ProductLogoProps {
  name: string;
  logo: string;
  className?: string;
}

export default function ProductLogo({ name, logo, className = '' }: ProductLogoProps) {
  return (
    <div
      className={`bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors ${className}`}
    >
      <Image
        src={logo}
        alt={`${name} logo`}
        width={40}
        height={40}
        className="object-contain"
      />
    </div>
  );
}
