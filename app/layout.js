import './globals.css';
import NavBar from './components/NavBar.jsx'

export const metadata = {
  title: 'Herbal Services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
