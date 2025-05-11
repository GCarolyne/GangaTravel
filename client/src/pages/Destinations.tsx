import { Carousel } from "../components/Carousel";
import { NavBar } from "../components/NavBar";

export type Image = {
  src: string;
  alt: string;
};

const images: Image[] = [
  {
    src: "/images/Unknown.jpeg",
    alt: "Napoli",
  },
  {
    src: "/images/shutterstock_273331316.jpg",
    alt: "Napoli",
  },
  {
    src: "/images/shutterstock_2225051107.jpg",
    alt: "Napoli",
  },
  {
    src: "/images/shutterstock_2131778839.jpg",
    alt: "Napoli",
  },
];
export function Destinations() {
  return (
    <div className="min-h-screen bg-orange-800 flex flex-col items-center">
      <NavBar />

      <div className="w-11/12 max-w-4xl mx-auto py-8 px-4">
        <div
          className="bg-[#fffaf0] rounded-xl shadow-md border border-[#d6bfa7] overflow-hidden p-6 font-serif"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
            backgroundBlendMode: "overlay",
          }}
        >
          <h2 className="text-2xl md:text-3xl text-[#6e4c1e] font-bold text-center mb-6 italic">
            Napoli
          </h2>

          <div className="border-t-2 border-[#c4a484] pt-4 mb-6">
            <Carousel images={images} />
          </div>

          <p className="text-center mt-4 text-sm md:text-base text-[#5e3d1f] font-serif italic">
            Authenticke vylety v Taliansku
          </p>
        </div>
      </div>
    </div>
  );
}
