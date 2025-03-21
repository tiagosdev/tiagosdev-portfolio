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
                  <img src="/github.png" alt="Github" className="w-10 h-10" />
                </a>
                <a
                  href="https://discord.gg/9N23bsKXeb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/discord.png" alt="Discord" className="w-10 h-10" />
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
              <h1 className="text-emerald-500 text-7xl font-bold mb-8">
                BEM-VINDO,
              </h1>
              <p className="text-emerald-100 text-lg font-medium leading-relaxed">
                O meu nome é{' '}
                <span className="text-emerald-500">Tiago Vieira da Silva</span>{' '}
                e sou um jovem desenvolvedor de software e web, natural de{' '}
                <span className="text-emerald-500">Sines, Portugal</span>, com
                uma grande paixão por{' '}
                <span className="text-emerald-500">tecnologia e inovação</span>.
                Atualmente, estou a tirar um curso de{' '}
                <span className="text-emerald-500">Informática de Gestão</span>,
                onde aprofundo os meus conhecimentos em{' '}
                <span className="text-emerald-500">
                  programação, desenvolvimento de aplicações
                </span>{' '}
                e <span className="text-emerald-500">gestão de sistemas</span>.
                Tenho um forte interesse em{' '}
                <span className="text-emerald-500">criar soluções</span>{' '}
                digitais eficientes e intuitivas, sempre com o objetivo de
                otimizar processos e
                <span className="text-emerald-500">
                  {' '}
                  melhorar a experiência
                </span>{' '}
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
                  className="w-10 h-10 animate-pulse"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="digital-skills">
        <div className="bg-zinc-900 min-h-screen w-full flex flex-col">
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
                alt="Seta para baixo"
                className="w-10 h-10 rotate-180 animate-pulse"
              />
            </Link>
          </div>
          <div>
            <h2 className="text-emerald-500 text-6xl font-bold text-center mt-8 mb-16">
              DIGITAL-SKILLS
            </h2>
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-start animate-[pulse_5s_ease-in-out_infinite] opacity-100">
              <div className="grid grid-cols-3 gap-8 max-w-[800px]">
                <div className="flex items-center gap-4 bg-zinc-800/50 rounded-2xl p-4">
                  <img src="/dotnet.png" alt=".NET" className="w-12 h-12" />
                  <div>
                    <div className="text-emerald-500 font-bold">.NET</div>
                    <div className="text-emerald-100 text-sm">Avançado</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-zinc-800/50 rounded-2xl p-4">
                  <img src="/react.png" alt="React" className="w-12 h-12" />
                  <div>
                    <div className="text-emerald-500 font-bold">REACT</div>
                    <div className="text-emerald-100 text-sm">Básico</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-zinc-800/50 rounded-2xl p-4">
                  <img src="/nextjs.png" alt="NextJs" className="w-12 h-12" />
                  <div>
                    <div className="text-emerald-500 font-bold">NextJs</div>
                    <div className="text-emerald-100 text-sm">Básico</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-zinc-800/50 rounded-2xl p-4">
                  <img
                    src="/typescript.png"
                    alt="TypeScript"
                    className="w-12 h-12"
                  />
                  <div>
                    <div className="text-emerald-500 font-bold">TypeScript</div>
                    <div className="text-emerald-100 text-sm">Básico</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-zinc-800/50 rounded-2xl p-4">
                  <img
                    src="/javascript.png"
                    alt="JavaScript"
                    className="w-12 h-12"
                  />
                  <div>
                    <div className="text-emerald-500 font-bold">JavaScript</div>
                    <div className="text-emerald-100 text-sm">Básico</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-zinc-800/50 rounded-2xl p-4">
                  <img
                    src="/tailwind.png"
                    alt="TailwindCSS"
                    className="w-12 h-12"
                  />
                  <div>
                    <div className="text-emerald-500 font-bold">
                      TailwindCSS
                    </div>
                    <div className="text-emerald-100 text-sm">Básico</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-zinc-800/50 rounded-2xl p-4">
                  <img src="/lua.png" alt="Lua" className="w-12 h-12" />
                  <div>
                    <div className="text-emerald-500 font-bold">Lua</div>
                    <div className="text-emerald-100 text-sm">Médio</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-zinc-800/50 rounded-2xl p-4">
                  <img src="/sql.png" alt="SQL/MySQL" className="w-12 h-12" />
                  <div>
                    <div className="text-emerald-500 font-bold">SQL/MySQL</div>
                    <div className="text-emerald-100 text-sm">Médio</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-zinc-800/50 rounded-2xl p-4">
                  <img src="/c.png" alt="Linguagem C" className="w-12 h-12" />
                  <div>
                    <div className="text-emerald-500 font-bold">
                      Linguagem C
                    </div>
                    <div className="text-emerald-100 text-sm">Básico</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-zinc-800/50 rounded-2xl p-4">
                  <img src="/figma.png" alt="Figma" className="w-12 h-12" />
                  <div>
                    <div className="text-emerald-500 font-bold">Figma</div>
                    <div className="text-emerald-100 text-sm">Avançado</div>
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
        </div>
      </section>
    </main>
  );
}
