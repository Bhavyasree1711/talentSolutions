import Image from 'next/image';

type LogoSize = 'nav' | 'footer' | 'large';

export default function DMXLogo({
  size = 'nav',
  className = '',
}: {
  size?: LogoSize;
  className?: string;
}) {
  const sizeMap: Record<LogoSize, number> = {
    nav: 120,
    footer: 150,
    large: 220,
  };

  // ✅ FALLBACK (VERY IMPORTANT)
  const width = sizeMap[size] ?? 120;

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/images/dmx-logo.png"
        alt="DMX Talent"
        width={width}
        height={60}
        className="object-contain"
        priority
      />
    </div>
  );
}