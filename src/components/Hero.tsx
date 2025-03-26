
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-purple-50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2NEgzNnpNNDAgMzBoNHY0aC00ek0zMiAzMmg0djRoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      </div>
      
      <div className="container px-4 mx-auto text-center relative z-10">
        <span className="inline-block animate-fade-up py-2 px-4 mb-6 rounded-full bg-primary/10 text-primary font-inter font-medium">
          Welcome to Bridging the Gender Gap
        </span>
        
        <h1 className="animate-fade-up font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
          Empowering Equality,
          <br />
          One Step at a Time
        </h1>
        
        <p className="animate-fade-up font-inter text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join our mission to create a world where gender equality is not just a goal, but a reality.
          Together, we can make a difference.
        </p>
        
        <div className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 font-inter">
            Explore Data
            <ArrowRight size={20} />
          </button>
          <button className="w-full sm:w-auto px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-inter">
            Find a Mentor
          </button>
          <button className="w-full sm:w-auto px-8 py-3 bg-gold text-white rounded-lg hover:bg-gold-dark transition-colors font-inter">
            Join Community
          </button>
        </div>
      </div>
    </section>
  );
};
