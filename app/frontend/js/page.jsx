
import Link from "next/link"

export const metadata = {
    title: 'gonza | JavaScript'
}

const JavaScript = () => {
    return (
        <>
            <div className='text-center w-[80%] lg:w-[50%]'>
                <h1 className="text-2xl font-bold mt-[-16px] mb-9" >JavaScript</h1>
            </div>
            <div className='ml-[-10px]'>
                    <Link href={'/frontend/js/react'} >
                        <h2 className='text-lg' >• <span className='underline underline-offset-2 hover:underline-offset-1 decoration-amber-500 hover:text-amber-200' >react</span></h2>
                    </Link>
                    <Link href={'/frontend/js/qwik'} >
                        <h2 className='text-lg' >• <span className='underline underline-offset-2 hover:underline-offset-1 decoration-amber-500 hover:text-amber-200' >qwik</span></h2>
                    </Link>
                </div>
            <footer className='w-[150px] mt-auto mb-[50px]' >
                <h3 className='text-xs underline underline-offset-2 hover:underline-offset-1 decoration-amber-500 hover:text-amber-200' > 
                    <Link href='/frontend' >Back to frontend</Link> 
                </h3>
            </footer>
        </>
    )
}

export default JavaScript