export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Nome do Projeto',
    description: 'Descrição detalhada do projeto...',
    image: '/projeto1.png',
    technologies: ['React', 'TypeScript', 'TailwindCSS'],
    githubUrl: 'https://github.com/seu-usuario/projeto',
    demoUrl: 'https://seu-projeto.com',
  },
  // Adicione mais projetos aqui
];
