import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
// Import all logos
import logo1 from "/public/assets/portfolio/1adra.png";
import logo2 from "/public/assets/portfolio/2bcrr.png";
import logo3 from "/public/assets/portfolio/3mystetskyi_arsenal.svg";
import logo4 from "/public/assets/portfolio/4IRRP.jpg";
import logo5 from "/public/assets/portfolio/5midnipro.png";
import logo6 from "/public/assets/portfolio/6ukrmepa.svg";
import logo7 from "/public/assets/portfolio/7anomaly.svg";
import logo8 from "/public/assets/portfolio/8bihus.svg";
import logo9 from "/public/assets/portfolio/9pvcloud.jpg";
import logo10 from "/public/assets/portfolio/10nchs.svg";
import logo11 from "/public/assets/portfolio/11emm.svg";
import logo12 from "/public/assets/portfolio/12workua.svg";
import logo13 from "/public/assets/portfolio/13skiftech.png";
import logo14 from "/public/assets/portfolio/14promartura.png";
import logo15 from "/public/assets/portfolio/15holleman.svg";
import logo16 from "/public/assets/portfolio/16zzzsh.jpg";
import logo17 from "/public/assets/portfolio/17polifarb.png";
import logo18 from "/public/assets/portfolio/18gipromez.png";
import logo19 from "/public/assets/portfolio/19medhouse.png";
import logo20 from "/public/assets/portfolio/20dobrycapital.png";

export default function PortfolioSection({portfolio}) {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
    logo16,
    logo17,
    logo18,
    logo19,
    logo20,
  ];
 
  return (
    <section
      id="portfolio"
      className="pt-10 pb-4 bg-gray-50  text-center overflow-x-hidden"
    >
      <h2 className="text-4xl font-semibold mb-2">{portfolio.title}</h2>
      <p className="uppercase text-sm tracking-widest text-gray-500">
        {portfolio.subtitle}
      </p>

      {/* Scrollable logos */}
      {/* <div
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 md:px-8 lg:px-10 py-8"
      > */}
      <div className="">
        <Marquee
          gradient={false}
          speed={50} // Adjust speed
          pauseOnHover={true}
          direction="left"
          className="py-8"
        >
        {logos.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05}}
            className="relative mx-4 w-40 h-28 md:w-48 md:h-32 flex-shrink-0 snap-center bg-white rounded-2xl shadow-md flex justify-center items-center p-4 transition-all duration-300 grayscale hover:grayscale-0" 
          >
            <img
              src={src}
              alt={`Логотип клієнта ${i + 1}`}
              className="max-w-full max-h-full object-contain"
              loading="lazy"
            />
          </motion.div>
        ))}</Marquee>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
