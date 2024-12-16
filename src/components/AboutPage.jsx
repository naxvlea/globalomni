import React from 'react';
import { styles } from "../styles"; 
import gambar1 from '../assets/gambar1.png';
import gambar2 from '../assets/gambar2.png';
import gambar3 from '../assets/gambar3.png';
import gambar4 from '../assets/gambar4.png';
import gambar5 from '../assets/gambar5.png';
import gambar6 from '../assets/gambar6.png';
import gambar7 from '../assets/gambar7.png';
import gambar8 from '../assets/gambar8.png';
import gambar9 from '../assets/gambar9.png';
import gambar10 from '../assets/gambar10.png';
import gambar11 from '../assets/gambar11.png';
import gambar12 from '../assets/gambar12.png';
import gambar13 from '../assets/gambar13.png';
import gambar14 from '../assets/gambar14.png';
import gambar15 from '../assets/gambar15.png';
import gambar16 from '../assets/gambar16.png';
import gambar17 from '../assets/gambar17.png';
import gambar18 from '../assets/gambar18.png';
import gambar19 from '../assets/gambar19.png';
import gambar20 from '../assets/gambar20.png';
import gambar21 from '../assets/gambar21.png';

const CityGallery = () => {
  const images = [
    {
      alt: "Aerial view of New York City with skyscrapers and Central Park",
      src: "assets/images/new_york.jpg",
    },
    {
      alt: "Eiffel Tower in Paris with a beautiful sunset",
      src: "assets/images/paris.jpg",
    },
    {
      alt: "Tokyo cityscape with Tokyo Tower and Mount Fuji in the background",
      src: "assets/images/tokyo.jpg",
    },
    {
      alt: "Sydney Opera House and Sydney Harbour Bridge at dusk",
      src: "assets/images/sydney.jpg",
    },
    {
      alt: "London skyline with the River Thames and Big Ben",
      src: "assets/images/london.jpg",
    },
    {
      alt: "Dubai skyline with Burj Khalifa and modern skyscrapers",
      src: "assets/images/dubai.jpg",
    },
    {
      alt: "Hong Kong skyline with Victoria Harbour and skyscrapers",
      src: "assets/images/hong_kong.jpg",
    },
    {
      alt: "Rome Colosseum with a clear blue sky",
      src: "assets/images/rome.jpg",
    },
    {
      alt: "San Francisco Golden Gate Bridge with fog",
      src: "assets/images/san_francisco.jpg",
    },
    {
      alt: "Singapore skyline with Marina Bay Sands and Gardens by the Bay",
      src: "assets/images/singapore.jpg",
    },
    {
      alt: "Berlin Brandenburg Gate with a clear blue sky",
      src: "assets/images/berlin.jpg",
    },
    {
      alt: "Barcelona Sagrada Familia with a clear blue sky",
      src: "assets/images/barcelona.jpg",
    },
  ];

  const additionalImages = [
    {
      alt: "Seattle skyline with Space Needle and Mount Rainier",
      src: "assets/images/seattle.jpg",
    },
    {
      alt: "Rio de Janeiro with Christ the Redeemer statue",
      src: "assets/images/rio.jpg",
    },
    {
      alt: "Cape Town with Table Mountain and waterfront",
      src: "assets/images/cape_town.jpg",
    },
    {
      alt: "Istanbul skyline with Hagia Sophia and Bosphorus",
      src: "assets/images/istanbul.jpg",
    },
    {
      alt: "Moscow Red Square with St. Basil's Cathedral",
      src: "assets/images/moscow.jpg",
    },
    {
      alt: "Toronto skyline with CN Tower and Lake Ontario",
      src: "assets/images/toronto.jpg",
    },
    {
      alt: "Venice canals with gondolas and historic buildings",
      src: "assets/images/venice.jpg",
    },
    {
      alt: "Beijing Forbidden City with traditional architecture",
      src: "assets/images/beijing.jpg",
    },
    {
      alt: "Bangkok Grand Palace with golden temples",
      src: "assets/images/bangkok.jpg",
    },
  ];

  return (
    <div className="bg-transparant font-roboto">
    
      <main className="p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover-zoom"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                width="300"
                height="200"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-9 gap-4 mt-4">
          {additionalImages.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover-zoom"
              style={{ height: "150px" }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </main>
      <style jsx>{`
        .hover-zoom img {
          transition: transform 0.3s ease;
        }
        .hover-zoom:hover img {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default CityGallery;