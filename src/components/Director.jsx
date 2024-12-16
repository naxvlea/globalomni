import React from 'react';
import { styles } from "../styles";
import Alex from '../assets/Alex.jpg';
import Gustaf from '../assets/Gustaf.jpg';

const Director = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[100px] sm:mt-[76px] px-4">
      {/* Bagian atas teks responsif */}
      <div className="bg-transparent rounded-2xl p-8 min-h-[300px] w-full">
        <h2 className="text-black font-black text-left md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mt-[1px] mx-auto sm:ml-[100px]">
          Our Director.
        </h2>
      </div>

      {/* Bagian direktur */}
      <div className="flex flex-col sm:flex-row justify-center gap-12 sm:gap-24 mt-[-190px] mb-[90px]">
        
        {/* Profil direktur pertama */}
        <div className="text-center gap-16 mt-10 sm:mt-0">
          {/* Menambahkan gambar di dalam container bulat */}
          <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full overflow-hidden mx-auto mb-[30px]">
            <img
              src={Alex}  // Ganti dengan URL gambar pertama
              alt="M. Azhar"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="font-semibold text-black text-lg sm:text-xl">M. AZHAR</h2>
          <h3 className="font-light mb-4 text-black text-sm sm:text-base">PRESIDENT DIRECTOR</h3>
          <p className="text-sm sm:text-base justify-text mt-[-10px] text-secondary text-[15px] sm:text-[17px] max-w-sm leading-[30px] mx-auto">
            16 years experiences in MNC based in Singapore & Indonesia in various industries, lifestyle, entertainment, real estate & property management. He is also active in philanthropy activities & social works for recent years since covid-19.
          </p>
        </div>

        {/* Profil direktur kedua */}
        <div className="text-center">
          {/* Menambahkan gambar di dalam container bulat */}
          <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full overflow-hidden mx-auto mb-[30px]">
            <img
              src={Gustaf}  // Ganti dengan URL gambar kedua
              alt="Oustaf Riandroy"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="font-semibold text-black text-lg sm:text-xl">OUSTAF RIANDROY</h2>
          <h3 className="font-light mb-4 text-black text-sm sm:text-base">DIRECTOR</h3>
          <p className="text-sm sm:text-base justify-text mt-[-10px] text-secondary text-[15px] sm:text-[17px] max-w-sm leading-[30px] mx-auto">
            As Director Mr. Riandroy is responsible for business overview & development of OPAM. He will support OPAM & continue to oversee the existing real estate portfolios and remain responsible for asset and partner selection. 
          </p>
        </div>
        
      </div>

    </div>
  );
};

export default Director;
