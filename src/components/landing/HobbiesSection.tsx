import Image from 'next/image';
import { hobbies } from '@/lib/data';

export function HobbiesSection() {
  return (
    <section id="hobbies" className="container py-24 sm:py-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Beyond the Code</h2>
        <p className="text-lg text-muted-foreground mt-2">A few of the things I enjoy doing in my free time.</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {hobbies.map((hobby) => (
          <div key={hobby.name} className="relative group aspect-square rounded-lg overflow-hidden shadow-lg">
            <Image
              src={hobby.image.imageUrl}
              alt={hobby.name}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              data-ai-hint={hobby.image.imageHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute inset-0 flex items-end p-4">
              <h3 className="text-xl font-bold text-white font-headline">{hobby.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
