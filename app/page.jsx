import Link from 'next/link';

export const metadata = {
  title: 'gonza | Blog',
}

export default function Home() {

  return (
    <>
      <h1 className="text-2xl font-bold mt-[-16px] mb-9 " >Home</h1>
      <div className='ml-[-10px]'>
        <Link href={'/peace'} >
          <h2 className='text-lg' >• <span className='underline underline-offset-2 hover:underline-offset-1 decoration-amber-500 hover:text-amber-200' >peace</span></h2>
        </Link>
        <Link href={'/freedom'} >
          <h2 className='text-lg' >• <span className='underline underline-offset-2 hover:underline-offset-1 decoration-amber-500 hover:text-amber-200' >freedom</span></h2>
        </Link>
        <Link href={'/health'} >
          <h2 className='text-lg' >• <span className='underline underline-offset-2 hover:underline-offset-1 decoration-amber-500 hover:text-amber-200' >health</span></h2>
        </Link>
      </div>
      <Link href={'/frontend'} className='mt-14 ml-[-10px]' >
          <h2 className='text-lg' >• <span className='underline underline-offset-2 hover:underline-offset-1 decoration-amber-500 hover:text-amber-200' >frontend</span></h2>
        </Link>
      <footer className='mt-auto mb-[50px]' >
          <h3 className='text-xs' > 
            Written by <Link href='/about' className='underline underline-offset-2 hover:underline-offset-1 decoration-amber-500 hover:text-amber-200' >gonza</Link>
          </h3>
      </footer>
    </>
  )
}