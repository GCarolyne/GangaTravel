import { NavBar } from "../components/NavBar";
export function About() {
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
            O nás
          </h2>

          <div className="border-t-2 border-[#c4a484] pt-6 mb-4">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#d6bfa7] shadow-md">
                  <img
                    src="/images/lyra.jpg"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="w-full md:w-2/3">
                <p className="text-[#5e3d1f] leading-relaxed text-justify">
                  Sme{" "}
                  <span className="font-semibold text-[#6e4c1e]">
                    Klub cestovatelov Parthenope
                  </span>
                  . Experti a milovnici talianskej kultury, umenia a
                  gastronomie. Náš itinerár vás prevedie mestami a miestami na
                  juhu Talianska:
                </p>

                <ul className="my-4 pl-5 text-[#5e3d1f]">
                  <li className="mb-2 italic">
                    Neapol - rodisko sirény Parthenope
                  </li>
                  <li className="mb-2 italic">
                    Capri - objavenie prírodných krás ostrova
                  </li>
                  <li className="mb-2 italic">
                    Amalfi - výstup do očarujúceho Ravella
                  </li>
                  <li className="mb-2 italic">
                    Cilento - ochutnávka pravej Diéty Mediteranei
                  </li>
                  <li className="mb-2 italic">
                    Terme di Contursi - kúpanie v liečivej siričitej vode
                  </li>
                </ul>

                <p className="text-[#5e3d1f] leading-relaxed text-justify">
                  Zažijete krásne a jedinečné chvíle v historickom Neapole, na
                  čarovnom ostrove Capri, v malebnom Amalfi a ďalších skvostoch
                  južného Talianska. Neváhajte a zarezervujte si termín letenky
                  s príletom a odletom do Neapola. Cena pre jednu osobu zahŕňa
                  skupinový výlet pre 7 osôb.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button className="bg-[#a47148] text-white py-2 px-6 rounded-md hover:bg-[#92613c] transition-colors font-serif">
              Rezervovať termín
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
