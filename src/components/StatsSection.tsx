'use client';

import { useEffect, useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) { setCount(target); clearInterval(timer); }
            else { setCount(Math.floor(current)); }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { number: '500+', label: 'Successful Placements', delay: 0 },
  { number: '100+', label: 'Hiring Partners', delay: 100 },
  { number: '10+', label: 'Industries Served', delay: 200 },
  { number: '95%', label: 'Client Satisfaction', delay: 300 },
];

export default function StatsSection() {
  return (
    <section id="stats" className="py-20 lg:py-28 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: 'var(--font-outfit)', color: '#0B1F3A' }}>
            Why Trust DMX TALENT SOLUTIONS
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Proven metrics that demonstrate our excellence in talent solutions
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} direction="up" delay={stat.delay}>
              <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 text-center flex flex-col justify-center items-center h-full">
                <p className="text-4xl sm:text-5xl font-extrabold mb-2" style={{ color: '#E63946' }}>
                  {stat.number}
                </p>
                <p className="text-lg font-bold text-gray-800">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
