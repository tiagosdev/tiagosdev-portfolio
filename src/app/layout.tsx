import '~/styles/globals.css';

import { Poppins } from 'next/font/google';
import { type Metadata } from 'next';

import { TRPCReactProvider } from '~/trpc/react';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'fallback',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Tiago Vieira da Silva - Portfolio',
  description: 'Perfil pessoal e projetos de Tiago Vieira da Silva.',
  icons: [{ rel: 'icon', url: '/profile_picture.png' }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={poppins.className}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
