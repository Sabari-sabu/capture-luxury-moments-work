
import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  date: string;
  category: string;
  heroImage: string;
  images: string[];
}

const Gallery = () => {
  const [selectedGallery, setSelectedGallery] = useState<GalleryItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Royal Wedding - Priya & Arjun",
      date: "December 2024",
      category: "Wedding",
      heroImage: "https://i.postimg.cc/xCTN96qp/IMG-6513-1.jpg",
      images: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1594736797933-d0bdc6bed629?w=1200&h=800&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Corporate Gala - Tech Summit",
      date: "November 2024",
      category: "Corporate",
      heroImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&h=800&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Fashion Portfolio - Maya Singh",
      date: "October 2024", 
      category: "Fashion",
      heroImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&h=800&fit=crop"
      ]
    },
    {
      id: 4,
      title: "Birthday Celebration - Rajesh Family",
      date: "September 2024",
      category: "Birthday", 
      heroImage: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop"
      ]
    },
    {
      id: 5,
      title: "Engagement Shoot - Kavya & Vikram",
      date: "August 2024",
      category: "Engagement",
      heroImage: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&h=800&fit=crop"
      ]
    },
    {
      id: 6,
      title: "Product Showcase - Luxury Watches",
      date: "July 2024",
      category: "Product",
      heroImage: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1517242027094-631f8c218a0f?w=1200&h=800&fit=crop"
      ]
    }
  ];

  const openGallery = (gallery: GalleryItem) => {
    setSelectedGallery(gallery);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedGallery) {
      setCurrentImageIndex((prev) => 
        prev === selectedGallery.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedGallery) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedGallery.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="gallery" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-thin mb-6 text-white">
            Our <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
            Every frame tells a story. Explore our portfolio of unforgettable moments captured with precision and artistry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              onClick={() => openGallery(item)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-900 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                <img
                  src={item.heroImage}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-primary text-sm font-medium">{item.category}</span>
                  <h3 className="text-white text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      <Dialog open={!!selectedGallery} onOpenChange={() => setSelectedGallery(null)}>
        <DialogContent className="max-w-6xl h-[90vh] bg-black border-gray-800 p-0">
          {selectedGallery && (
            <div className="relative h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-800">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{selectedGallery.title}</h3>
                  <p className="text-white/70">{selectedGallery.date} • {selectedGallery.category}</p>
                </div>
                <button
                  onClick={() => setSelectedGallery(null)}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Image Display */}
              <div className="flex-1 relative">
                <img
                  src={selectedGallery.images[currentImageIndex]}
                  alt={`${selectedGallery.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain"
                />
                
                {/* Navigation */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-200"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-200"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Image counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
                  {currentImageIndex + 1} / {selectedGallery.images.length}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
