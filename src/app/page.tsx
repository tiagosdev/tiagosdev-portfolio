'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <main>
      <section className="bg-zinc-900 min-h-screen w-full" id="home">
        <div
          className={`transition-opacity duration-1000 ease-in-out ${
            fade ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex items-center justify-center min-h-screen px-4 max-w-7xl mx-auto gap-48 relative">
            <div className="flex-shrink-0">
              <img
                src="/profile_picture.png"
                alt="Foto de Perfil - Tiago Vieira da Silva"
                className="h-[360px] w-[360px] rounded-full"
              />
              <div className="flex items-center justify-center gap-3 mt-4">
                <a
                  href="https://github.com/tiagosdev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/github.png"
                    alt="Github"
                    className="w-10 h-10 brightness-0 invert filter-blue"
                  />
                </a>
                <a
                  href="https://discord.gg/9N23bsKXeb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/discord.png"
                    alt="Discord"
                    className="w-10 h-10 brightness-0 invert filter-blue"
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
                    className="w-10 h-10"
                  />
                </a>
                <a
                  href="https://x.com/tiagosdev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/x.png" alt="X (Twitter)" className="w-10 h-10" />
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-blue-400 text-7xl font-bold mb-8">
                BEM-VINDO,
              </h1>
              <p className="text-blue-100 text-lg font-medium leading-relaxed">
                O meu nome é{' '}
                <span className="text-blue-400">Tiago Vieira da Silva</span> e
                sou um jovem desenvolvedor de software e web, natural de{' '}
                <span className="text-blue-400">Sines, Portugal</span>, com uma
                grande paixão por{' '}
                <span className="text-blue-400">tecnologia e inovação</span>.
                Atualmente, estou a tirar um curso de{' '}
                <span className="text-blue-400">Informática de Gestão</span>,
                onde aprofundo os meus conhecimentos em{' '}
                <span className="text-blue-400">
                  programação, desenvolvimento de aplicações
                </span>{' '}
                e <span className="text-blue-400">gestão de sistemas</span>.
                Tenho um forte interesse em{' '}
                <span className="text-blue-400">criar soluções</span> digitais
                eficientes e intuitivas, sempre com o objetivo de otimizar
                processos e
                <span className="text-blue-400"> melhorar a experiência</span>{' '}
                do utilizador.
              </p>
            </div>
            <div className="flex items-center justify-center absolute bottom-8">
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
                  className="w-10 h-10 animate-pulse brightness-0 invert filter-blue"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        id="digital-skills"
        className="bg-zinc-900 min-h-screen w-full relative"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center pt-4">
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
          <div>
            <h2 className="text-blue-400 text-6xl font-bold text-center mt-8 mb-16">
              DIGITAL-SKILLS
            </h2>
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-start ">
              <div className="grid grid-cols-3 gap-8 max-w-[800px]">
                <div className="flex items-center gap-4 bg-zinc-800/50 rounded-2xl p-4">
                  <img src="/dotnet.png" alt=".NET" className="w-12 h-12" />
                  <div>
                    <div className="text-blue-400 font-bold">.NET</div>
                    <div className="text-blue-100 text-sm">Avançado</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-zinc-800/50 rounded-2xl p-4">
                  <img src="/react.png" alt="React" className="w-12 h-12" />
                  <div>
                    <div className="text-blue-400 font-bold">REACT</div>
                    <div className="text-blue-100 text-sm">Básico</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-zinc-800/50 rounded-2xl p-4">
                  <img src="/nextjs.png" alt="NextJs" className="w-12 h-12" />
                  <div>
                    <div className="text-blue-400 font-bold">NextJs</div>
                    <div className="text-blue-100 text-sm">Básico</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-zinc-800/50 rounded-2xl p-4">
                  <img
                    src="/typescript.png"
                    alt="TypeScript"
                    className="w-12 h-12"
                  />
                  <div>
                    <div className="text-blue-400 font-bold">TypeScript</div>
                    <div className="text-blue-100 text-sm">Básico</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-zinc-800/50 rounded-2xl p-4">
                  <img
                    src="/javascript.png"
                    alt="JavaScript"
                    className="w-12 h-12"
                  />
                  <div>
                    <div className="text-blue-400 font-bold">JavaScript</div>
                    <div className="text-blue-100 text-sm">Básico</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-zinc-800/50 rounded-2xl p-4">
                  <img
                    src="/tailwind.png"
                    alt="TailwindCSS"
                    className="w-12 h-12"
                  />
                  <div>
                    <div className="text-blue-400 font-bold">TailwindCSS</div>
                    <div className="text-blue-100 text-sm">Básico</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-zinc-800/50 rounded-2xl p-4">
                  <img src="/lua.png" alt="Lua" className="w-12 h-12" />
                  <div>
                    <div className="text-blue-400 font-bold">Lua</div>
                    <div className="text-blue-100 text-sm">Médio</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-zinc-800/50 rounded-2xl p-4">
                  <img src="/sql.png" alt="SQL/MySQL" className="w-12 h-12" />
                  <div>
                    <div className="text-blue-400 font-bold">SQL/MySQL</div>
                    <div className="text-blue-100 text-sm">Médio</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-zinc-800/50 rounded-2xl p-4">
                  <img src="/c.png" alt="Linguagem C" className="w-12 h-12" />
                  <div>
                    <div className="text-blue-400 font-bold">Linguagem C</div>
                    <div className="text-blue-100 text-sm">Básico</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-zinc-800/50 rounded-2xl p-4">
                  <img src="/figma.png" alt="Figma" className="w-12 h-12" />
                  <div>
                    <div className="text-blue-400 font-bold">Figma</div>
                    <div className="text-blue-100 text-sm">Avançado</div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <img
                  src="/digitalskills.png"
                  alt="Digital Skills Ilustração"
                  className="w-[400px] h-[400px]"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center absolute bottom-8 w-full">
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
        </div>
      </section>
      <section
        id="projects"
        className="bg-zinc-900 min-h-screen w-full relative"
      >
        <div className="flex items-center justify-center pt-4">
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
        <h2 className="text-blue-400 text-6xl font-bold text-center mt-8 mb-16">
          PROJETOS
        </h2>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 gap-8">
          {/* Card de Projeto */}
          <div className="bg-zinc-800/50 rounded-2xl p-6 hover:scale-105 transition-transform">
            <div className="p-4 bg-zinc-700/50 rounded-xl mb-4">
              <img
                src="/atlas.png"
                alt="Projeto 1"
                className="w-full h-48 object-contain"
              />
            </div>
            <h3 className="text-blue-400 text-2xl font-bold mb-2">
              ATLAS — Sistema de Gestão Logística de Transportes
            </h3>
            <p className="text-blue-100 mb-4">
              Projeto desenvolvido no âmbito da PAP do curso de Informática de
              Gestão da{' '}
              <a
                href="https://alentecno.pt"
                target="_blank"
                className="text-blue-300"
              >
                Escola Tecnológica do Litoral Alentejano (ETLA)
              </a>
              , com o objetivo de criar uma aplicação para a gestão logística de
              serviços de transporte de passageiros, públicos e privados. A
              solução inclui um software em Visual Basic com base de dados em
              SQL Server, uma interface prototipada em Figma e um website
              informativo criado em HTML, CSS e JavaScript. O sistema visa
              facilitar a gestão de frotas, horários, motoristas e reservas,
              através de uma interface intuitiva e acessível.
            </p>
            <div className="flex gap-3">
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
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/atlaspap"
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
    </main>
  );
}
