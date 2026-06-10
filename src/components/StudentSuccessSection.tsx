'use client';

import { Quote, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const successStories = [
  {
    name: "Rahul Verma",
    prevRole: "B.Tech Fresher",
    newRole: "AWS Cloud Engineer",
    company: "TCS",
    quote: "I transitioned from a fresher to an AWS Cloud Engineer within 4 months. The hands-on live projects and mock interviews at DMX were the game changer for my career.",
    imageColor: "bg-blue-600",
    initials: "RV"
  },
  {
    name: "Sneha Patil",
    prevRole: "Manual Tester",
    newRole: "DevOps Engineer",
    company: "Infosys",
    quote: "Moving from manual testing to DevOps seemed impossible until I joined the DMX training program. The CI/CD pipelines curriculum is exactly what the industry demands.",
    imageColor: "bg-red-600",
    initials: "SP"
  },
  {
    name: "Karan Desai",
    prevRole: "Non-IT Background",
    newRole: "Cyber Security Analyst",
    company: "Wipro",
    quote: "Coming from a non-IT background, the trainers broke down complex networking and security concepts so easily. The 360° placement support helped me clear 3 technical rounds.",
    imageColor: "bg-teal-600",
    initials: "KD"
  }
];

export default function StudentSuccessSection() {
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <ScrollReveal direction="up" className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">
              Real Stories. <span className="text-red-600">Real Transformations.</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Don't just take our word for it. Hear from students who upskilled with us and successfully transitioned into high-paying IT roles.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {successStories.map((story, index) => (
             <ScrollReveal key={index} direction="up" delay={index * 100}>
               <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col h-full hover:shadow-xl hover:border-red-200 transition-all duration-300 group">
                 
                 <Quote className="w-10 h-10 text-red-100 mb-6 group-hover:text-red-200 transition-colors" />
                 
                 <p className="text-gray-700 leading-relaxed italic mb-8 flex-grow">
                   "{story.quote}"
                 </p>
                 
                 <div className="mt-auto">
                    {/* Career Growth Visual */}
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 mb-6 relative overflow-hidden">
                       <h5 className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-3">Career Transition</h5>
                       
                       <div className="flex items-center justify-between">
                          <div className="text-left flex-1">
                            <div className="font-semibold text-gray-700 text-sm leading-tight">{story.prevRole}</div>
                          </div>
                          
                          <div className="px-3 flex justify-center flex-shrink-0">
                            <ArrowRight className="text-red-500 w-4 h-4" />
                          </div>
                          
                          <div className="text-right flex-1">
                            <div className="font-bold text-[#0B1F3A] text-sm leading-tight">{story.newRole}</div>
                          </div>
                       </div>
                    </div>

                    <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                       <div className={`w-12 h-12 rounded-full ${story.imageColor} text-white flex items-center justify-center font-bold text-lg shadow-sm`}>
                          {story.initials}
                       </div>
                       <div>
                         <h4 className="font-bold text-[#0B1F3A] leading-tight mb-1">{story.name}</h4>
                         <p className="text-xs text-gray-500">Placed at <span className="text-red-600 font-bold">{story.company}</span></p>
                       </div>
                    </div>
                 </div>

               </div>
             </ScrollReveal>
           ))}
        </div>

      </div>
    </section>
  );
}
