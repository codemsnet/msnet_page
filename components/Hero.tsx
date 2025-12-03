import { useState } from "react";
import Image from "next/image";
import { products, statistics } from "./constants";

const Hero = () => {

  const shoes = products.map((p) => p.imgURL);
  const [bigShoeImg, setbigShoeImg] = useState<string>(shoes[0] ?? "/assets/images/big-shoe1.png")

  return (
    <section id="home" className="w-full flex flex-col lg:flex-row items-center lg:items-stretch min-h-screen gap-8">
      <div className="w-full lg:w-2/5 flex flex-col justify-center px-6 lg:px-12 py-20">
        <p className="text-lg text-orange-500 font-medium">Our Summer Collection</p>
        <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
          <span className="relative z-10">The New Arrival</span>
          <br />
          <span className="text-orange-500 inline-block mt-3">Nike</span> shoes
        </h1>

        <p className="text-lg text-slate-600 leading-7 mt-6 max-w-md">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>

        <div className="mt-8">
          <a href="#products" className="inline-flex items-center gap-3 bg-black text-white px-5 py-3 rounded-full hover:opacity-95">
            <span>Shop now</span>
            <Image src="/assets/icons/arrow-right.svg" alt="arrow" width={18} height={18} />
          </a>
        </div>

        <div className="flex flex-wrap items-center mt-12 gap-8">
          {statistics.map((stat) => (
            <div key={stat.label} className="min-w-[120px]">
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:flex-1 flex items-center justify-center bg-transparent relative py-12 lg:py-0">
        <div className="relative">
          <Image src={bigShoeImg} alt="shoe collection" width={610} height={500} className="relative z-10 object-contain" />

          <div className="flex gap-4 sm:gap-6 absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            {shoes.map((shoeUrl) => (
              <button key={shoeUrl} onClick={() => setbigShoeImg(shoeUrl)} className={`rounded-md overflow-hidden ring-2 ${bigShoeImg === shoeUrl ? 'ring-black' : 'ring-transparent'}`}>
                <Image src={shoeUrl} alt="shoe thumbnail" width={96} height={64} className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero