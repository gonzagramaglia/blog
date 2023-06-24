
import Link from "next/link"

export const metadata = {
    title: '✍🏼 Peace'
}

const Peace = () => {
    return (
        <>
            <div className='text-center w-[80%] lg:w-[50%]'>
                <h1 className="text-2xl font-bold mt-[-16px]" >Peace</h1>
                <h5 className="text-xs mb-6">23/06/2023</h5>
                <h3 className="text-base text-gray-300 italic sm:w-[60%] mx-auto mb-6">You can convert peace into happiness any time you want. But peace is what you want most of the time</h3>
                <p className="text-left my-6" >
                    'Peace is happiness at rest, and happiness is peace in motion.
                    You can convert peace to happiness any time you want,
                    but peace is want you want most of the time.
                    If you're a peaceful person, anything you do will be a happy activity.'
                </p>
                <Link href="https://youtu.be/3qHkcs3kG44" target="_blank" >
                    -<span className="underline underline-offset-2 hover:underline-offset-1 decoration-amber-500 hover:text-amber-200">
                        Naval Ravikant
                    </span>
                </Link>
            </div>
            <footer className='mt-auto mb-[50px]' >
                <h3 className='text-xs underline underline-offset-2 hover:underline-offset-1 decoration-amber-500 hover:text-amber-200' > 
                    <Link href='/' >Back to home</Link> 
                </h3>
            </footer>
        </>
    )
}

export default Peace