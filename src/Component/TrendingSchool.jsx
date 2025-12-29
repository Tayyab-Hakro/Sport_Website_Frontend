import React from 'react';
import bannerImg from "../assets/Post-1.png"
import cylistPng from "../assets/cyclist.png"
import horseImg from "../assets/horse.png"

const TrendingSchool = () => {
  const newsItems = [
    {
      id: 1,
      tag: "Race98",
      date: "03 June 2023",
      title: "6-Year-Old Horse Dies at Belmont Park After Race Injury",
      desc: "NEW YORK—A 6-year-old horse died after being injured in a race at Belmont Park ahead of next week's",
      image: cylistPng
    },
    {
      id: 2,
      tag: "Jony.I.s",
      date: "03 June 2023",
      title: "Savilia Blunk Embraces Longer Season With World Cup",
      desc: "Last year, Savilia Blunk took a more conservative approach to her first season as an Elite Class athlete, skipping some",
      image: horseImg
    },
    {
      id: 3,
      tag: "King.F",
      date: "03 June 2023",
      title: "Ryan Garcia is fighting again, this time on social media",
      desc: "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on",
      image: "https://images.unsplash.com/photo-1509563268479-0f004cf3f58b?auto=format&fit=crop&q=80&w=300"
    }
  ];

  return (
    <div className=" p-4 md:p-8 min-h-screen flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-xl shadow-sm">
        
        {/* Left Section: Trending News */}
        <div className="bg-[#F1F3F6] p-6 md:p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Trending News</h2>
          
          <div className="space-y-8">
            {newsItems.map((item) => (
              <div key={item.id} className="flex gap-4 items-start border-b border-gray-100 pb-6 last:border-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-32 h-24 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex flex-col">
                  <div className="flex items-center text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1">
                    <span>{item.tag} — {item.date}</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-gray-900 leading-tight mb-2 hover:text-blue-600 cursor-pointer">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Featured Card */}
        <div className="relative group overflow-hidden h-[400px] lg:h-auto">
          <img 
            src={bannerImg}
            alt="Cycling" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          <div className="relative h-full flex flex-col justify-between p-8 text-white">
           
            <div className="mb-4">
            
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TrendingSchool;