import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children}) {

  const header = (
    <header className='py-[60px]' >
      <div>
        <h1 className='text-2xl font-bold' > <Link href='/'>📜✍🏼</Link> </h1>
      </div>
    </header>
  )

  return (
    <html lang="en">
      <body className='flex flex-col h-screen items-center text-center bg-[#03040b] text-white' >
        {header}
        {children}
      </body>
    </html>
  )
}