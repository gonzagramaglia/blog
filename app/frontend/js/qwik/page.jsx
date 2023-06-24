
import Link from "next/link"

export const metadata = {
    title: 'gonza | Qwik'
}

const Qwik = () => {
    return (
        <>
            <div className='text-center w-[80%] lg:w-[50%]'>
                <h1 className="text-2xl font-bold mt-[-16px] mb-9" >Qwik.js</h1>
            </div>
            <footer className='w-[150px] mt-auto mb-[50px]' >
                <h3 className='text-xs underline underline-offset-2 hover:underline-offset-1 decoration-amber-500 hover:text-amber-200' > 
                    <Link href='/frontend/js' >Back to javascript</Link>
                </h3>
            </footer>
        </>
    )
}

export default Qwik