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
  { value: 94, suffix: '%', label: 'Retention Rate', description: 'Our placed candidates stay beyond one year' },
  { value: 48, suffix: 'hrs', label: 'Response Time', description: 'From request to candidate delivery' },
  { value: 85, suffix: '%', label: 'Technical Match Rate', description: 'Candidates meet requirements on first submission' },
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} direction="up" delay={index * 150}>
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border-2 border-gray-100 hover:border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group">
                <p className="text-5xl sm:text-6xl font-extrabold mb-3 transition-colors" style={{ color: '#E63946' }}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xl font-bold text-gray-900 mb-2">{stat.label}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
