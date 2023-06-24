
import Link from "next/link"

export const metadata = {
    title: 'gonza | Next.js'
}

const Next = () => {
    return (
        <>
            <div className='text-center w-[80%] lg:w-[50%]'>
                <h1 className="text-2xl font-bold mt-[-16px] mb-9" >Next.js</h1>
            </div>
            <footer className='w-[150px] mt-auto mb-[50px]' >
                <h3 className='text-xs underline underline-offset-2 hover:underline-offset-1 decoration-amber-500 hover:text-amber-200' > 
                    <Link href='/frontend/js/react' >Back to react</Link> 
                </h3>
            </footer>
        </>
    )
}

export default Next