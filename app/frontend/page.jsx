
import Link from "next/link"

export const metadata = {
    title: 'gonza | Frontend',
  }

const Frontend = () => {
    return (
        <>
            <div className='text-center w-[80%] lg:w-[50%]'>
                <h1 className="text-2xl font-bold mt-[-16px] mb-9" >Frontend</h1>
                <div className='ml-[-10px]'>
                    <Link href={'/frontend/html'} >
                        <h2 className='text-lg' >• <span className='underline underline-offset-2 hover:underline-offset-1 decoration-amber-500 hover:text-amber-200' >html</span></h2>
                    </Link>
                    <Link href={'/frontend/css'} >
                        <h2 className='text-lg' >• <span className='underline underline-offset-2 hover:underline-offset-1 decoration-amber-500 hover:text-amber-200' >css</span></h2>
                    </Link>
                    <Link href={'/frontend/js'} >
                        <h2 className='text-lg' >• <span className='underline underline-offset-2 hover:underline-offset-1 decoration-amber-500 hover:text-amber-200' >javascript</span></h2>
                    </Link>
                </div>
            </div>
            <footer className='w-[150px] mt-auto mb-[50px]' >
                <h3 className='text-xs underline underline-offset-2 hover:underline-offset-1 decoration-amber-500 hover:text-amber-200' > 
                    <Link href='/' >Back to home</Link> 
                </h3>
            </footer>
        </>
    )
}

export default Frontend