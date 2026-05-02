import Image from 'next/image';

export default function DMXLogo({ className = '', size = 'default' }: { className?: string; size?: 'small' | 'default' | 'large' }) {
  const dimensions = {
    small: { height: 32, width: 120 },
    default: { height: 44, width: 160 },
    large: { height: 64, width: 220 },
  };

  const d = dimensions[size];

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/images/dmx-logo.png"
        alt="DMX Talent Solutions Pvt Ltd"
        width={d.width}
        height={d.height}
        className="h-auto object-contain"
        style={{
          height: d.height,
          width: 'auto',
          filter: 'brightness(0.9) contrast(1.5)', // Make red color darker and more visible
        }}
        priority
      />
    </div>
  );
}
