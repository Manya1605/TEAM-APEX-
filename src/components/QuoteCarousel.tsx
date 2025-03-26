
import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from 'lucide-react';

type QuoteType = {
  quote: string;
  author: string;
  role: string;
};

export const QuoteCarousel = () => {
  const [autoplay, setAutoplay] = useState(true);
  
  const quotes: QuoteType[] = [
    {
      quote: "We cannot all succeed when half of us are held back.",
      author: "Malala Yousafzai",
      role: "Education Activist & Nobel Laureate"
    },
    {
      quote: "Gender equality is more than a goal in itself. It is a precondition for meeting the challenge of reducing poverty, promoting sustainable development and building good governance.",
      author: "Kofi Annan",
      role: "Former UN Secretary-General"
    },
    {
      quote: "No country can ever truly flourish if it stifles the potential of its women and deprives itself of the contributions of half its citizens.",
      author: "Michelle Obama",
      role: "Former First Lady of the United States"
    },
    {
      quote: "I raise up my voice—not so that I can shout, but so that those without a voice can be heard.",
      author: "Malala Yousafzai",
      role: "Education Activist & Nobel Laureate"
    },
    {
      quote: "Women belong in all places where decisions are being made. It shouldn't be that women are the exception.",
      author: "Ruth Bader Ginsburg",
      role: "Former US Supreme Court Justice"
    },
  ];

  useEffect(() => {
    let interval: number;
    
    if (autoplay) {
      interval = window.setInterval(() => {
        document.querySelector('.carousel-next')?.dispatchEvent(
          new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true,
            buttons: 1,
          }),
        );
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay]);

  return (
    <div className="w-full max-w-4xl mx-auto pb-12" 
         onMouseEnter={() => setAutoplay(false)}
         onMouseLeave={() => setAutoplay(true)}>
      <Carousel className="w-full">
        <CarouselContent>
          {quotes.map((quote, index) => (
            <CarouselItem key={index}>
              <Card className="border-none shadow-none">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <Quote size={42} className="text-primary/30 mb-4" />
                  <p className="text-xl md:text-2xl font-playfair italic text-gray-700 mb-6">
                    "{quote.quote}"
                  </p>
                  <div>
                    <p className="font-medium text-primary">{quote.author}</p>
                    <p className="text-sm text-gray-500">{quote.role}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4 gap-2">
          <CarouselPrevious className="relative static carousel-prev" />
          <CarouselNext className="relative static carousel-next" />
        </div>
      </Carousel>
    </div>
  );
};
