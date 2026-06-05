import './styles.css';

export const metadata = {
  title: 'Adecco Singapore | Workforce Solutions',
  description: 'A modern Adecco landing page for workforce transformation in Singapore.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
