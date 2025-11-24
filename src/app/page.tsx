'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const SECTION_IDS = ['home', 'digital-skills', 'projects'] as const;
type SectionId = (typeof SECTION_IDS)[number];

export default function Home() {
  const [fade, setFade] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>(SECTION_IDS[0]);

  useEffect(() => {
    setFade(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id as SectionId;
            if (SECTION_IDS.includes(id)) {
              setActiveSection(id);
            }
          }
        });
      },
      { threshold: 0.55 }
    );

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const currentIndex = SECTION_IDS.indexOf(activeSection);
  const prevSection = currentIndex > 0 ? SECTION_IDS[currentIndex - 1] : null;
  const nextSection =
    currentIndex < SECTION_IDS.length - 1
      ? SECTION_IDS[currentIndex + 1]
      : null;

  const handleSmoothScroll = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main className="bg-[#0c1018]">
        <section
          className="bg-[#0c1018] text-[#e2edff] min-h-screen w-full"
          id="home"
        >
          <div
            className={`transition-opacity duration-1000 ease-in-out ${
              fade ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-4 sm:px-6 py-16 max-w-6xl mx-auto gap-12 lg:gap-16 relative">
              <div className="flex-shrink-0 flex flex-col items-center lg:-translate-x-4 transition-transform">
                <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-[360px] lg:h-[360px] rounded-full p-2 border border-[#1b2a44]/40">
                  <img
                    src="/profile_picture.png"
                    alt="Foto de Perfil - Tiago Vieira da Silva"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
                  <a
                    href="https://github.com/tiagosdev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/github.png" alt="Github" className="w-8 h-8 sm:w-10 sm:h-10" />
                  </a>
                  <a
                    href="https://discord.gg/9N23bsKXeb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <img
                    src="/discord.png"
                    alt="Discord"
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  />
                  </a>
                  <a
                    href="https://linkedin.com/in/tiagosdev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/linkedin.png"
                      alt="LinkedIn"
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                  </a>
                  <a
                    href="https://x.com/tiagosdev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/x.png" alt="X (Twitter)" className="w-8 h-8 sm:w-10 sm:h-10" />
                  </a>
                </div>
              </div>
              <div className="flex flex-col max-w-3xl text-center lg:text-left">
                <h1 className="text-[#7dc4ff] text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-wide">
                  OLÁ,
                </h1>
                <p className="text-base sm:text-lg leading-relaxed text-[#f1f6ff]">
                  Sou o{' '}
                  <span className="text-[#6bc5ff] font-semibold">
                    Tiago Vieira da Silva
                  </span>
                  , um jovem{' '}
                  <span className="text-[#6bc5ff] font-semibold">
                    desenvolvedor de software
                  </span>{' '}
                  e <span className="text-[#6bc5ff] font-semibold">web</span>{' '}
                  natural de{' '}
                  <span className="text-[#6bc5ff] font-semibold">
                    Sines, Portugal
                  </span>
                  . Apaixonado por{' '}
                  <span className="text-[#6bc5ff] font-semibold">
                    tecnologia e inovação
                  </span>
                  , concluí um curso profissional de{' '}
                  <span className="text-[#6bc5ff] font-semibold">
                    Informática de Gestão
                  </span>
                  , onde aprofundei os meus conhecimentos técnicos e desenvolvi
                  o{' '}
                  <span className="text-[#6bc5ff] font-semibold">
                    Projeto Atlas
                  </span>
                  . Gosto de transformar{' '}
                  <span className="text-[#6bc5ff] font-semibold">ideias</span>{' '}
                  em soluções digitais{' '}
                  <span className="text-[#6bc5ff] font-semibold">
                    funcionais
                  </span>
                  , combinando{' '}
                  <span className="text-[#6bc5ff] font-semibold">
                    eficiência, usabilidade e design
                  </span>{' '}
                  para criar experiências{' '}
                  <span className="text-[#6bc5ff] font-semibold">
                    modernas e intuitivas
                  </span>
                  .
                </p>
              </div>
              <div className="flex lg:hidden items-center justify-center absolute bottom-8 w-full">
                <Link
                  href="#digital-skills"
                  scroll={false}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById('digital-skills')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <img
                    src="/arrow.png"
                    alt="Seta para baixo"
                    className="w-10 h-10 animate-pulse"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          id="digital-skills"
          className="bg-[#0c1018] min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6"
        >
          <div className="absolute top-6 w-full flex items-center justify-center lg:hidden">
            <Link
              href="#home"
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById('home')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <img
                src="/arrow.png"
                alt="Seta para cima"
                className="w-10 h-10 rotate-180 animate-pulse"
              />
            </Link>
          </div>
          <div className="max-w-3xl mx-auto w-full flex flex-col items-center text-center gap-6">
            <h2 className="text-blue-400 text-4xl sm:text-5xl md:text-6xl font-bold">
              Capacidades Técnicas
            </h2>
            <p className="text-blue-100 text-lg sm:text-xl md:text-2xl">
              Esta secção está a ser redesenhada para destacar as principais
              tecnologias e ferramentas que domino.
            </p>
            <div className="text-blue-300 text-2xl sm:text-3xl font-semibold flex items-center gap-2">
              Em breve
              <span className="flex gap-1">
                <span className="dot dot-1">.</span>
                <span className="dot dot-2">.</span>
                <span className="dot dot-3">.</span>
              </span>
            </div>
          </div>
          <div className="absolute bottom-6 w-full flex items-center justify-center lg:hidden">
            <Link
              href="#projects"
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <img
                src="/arrow.png"
                alt="Seta para baixo"
                className="w-10 h-10 animate-pulse"
              />
            </Link>
          </div>
        </section>
        <section
          id="projects"
          className="bg-[#0c1018] min-h-screen w-full relative px-4 sm:px-6 pb-16"
        >
          <div className="flex items-center justify-center pt-6 lg:hidden">
            <Link
              href="#digital-skills"
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById('digital-skills')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <img
                src="/arrow.png"
                alt="Seta para cima"
                className="w-10 h-10 rotate-180 animate-pulse"
              />
            </Link>
          </div>
          <h2 className="text-blue-400 text-4xl sm:text-5xl md:text-6xl font-bold text-center mt-10 mb-12">
            PROJETOS
          </h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Card de Projeto */}
            <div className="bg-zinc-800/50 rounded-2xl p-5 sm:p-6 hover:scale-[1.02] transition-transform">
              <div className="p-4 bg-zinc-700/50 rounded-xl mb-4 flex items-center justify-center">
                <img
                  src="/atlas.png"
                  alt="Projeto 1"
                  className="w-full max-h-48 object-contain"
                />
              </div>
              <h3 className="text-blue-400 text-xl sm:text-2xl font-bold mb-2 text-center lg:text-left">
                ATLAS — Sistema de Gestão Logística de Transportes
              </h3>
              <p className="text-blue-100 text-base sm:text-lg mb-4">
                Projeto desenvolvido no âmbito da PAP do curso de Informática de
                Gestão da{' '}
                <a
                  href="https://alentecno.pt"
                  target="_blank"
                  className="text-blue-300"
                >
                  Escola Tecnológica do Litoral Alentejano (ETLA)
                </a>
                , com o objetivo de criar uma aplicação para a gestão logística
                de serviços de transporte de passageiros, públicos e privados. A
                solução inclui um software em Visual Basic com base de dados em
                SQL Server, uma interface prototipada em Figma e um website
                informativo criado em HTML, CSS e JavaScript. O sistema visa
                facilitar a gestão de frotas, horários, motoristas e reservas,
                através de uma interface intuitiva e acessível.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                  Visual Basic
                </span>
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                  .NET Framework 4.7.2
                </span>
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                  WinForms
                </span>
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                  WebView2
                </span>
              </div>
              <div className="flex flex-wrap gap-4 mt-4">
                <a
                  href="https://github.com/orgs/atlaspap/repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                >
                  <img src="/github.png" alt="Github" className="w-6 h-6" />
                  Código
                </a>
                <a
                  href="https://atlas.etla.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                >
                  <img src="/website.png" alt="Link" className="w-6 h-6" />
                  Website (Offline)
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="hidden lg:flex flex-col items-center gap-6 fixed right-12 top-1/2 -translate-y-1/2 z-20">
          {prevSection && (
            <button
              type="button"
              onClick={() => handleSmoothScroll(prevSection)}
              className="transition-transform hover:scale-110"
              aria-label="Ir para a secção anterior"
            >
              <img
                src="/arrow.png"
                alt="Seta para cima"
                className="w-12 h-12 rotate-180 animate-pulse"
              />
            </button>
          )}
          {nextSection && (
            <button
              type="button"
              onClick={() => handleSmoothScroll(nextSection)}
              className="transition-transform hover:scale-110"
              aria-label="Ir para a próxima secção"
            >
              <img
                src="/arrow.png"
                alt="Seta para baixo"
                className="w-12 h-12 animate-pulse"
              />
            </button>
          )}
        </div>
      </main>
      <style jsx>{`
        .dot {
          animation: dotBounce 1.2s infinite ease-in-out;
          display: inline-block;
          font-size: 2rem;
        }
        .dot-2 {
          animation-delay: 0.2s;
        }
        .dot-3 {
          animation-delay: 0.4s;
        }
        @keyframes dotBounce {
          0%,
          60%,
          100% {
            transform: translateY(0);
            opacity: 0.2;
          }
          30% {
            transform: translateY(-6px);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
