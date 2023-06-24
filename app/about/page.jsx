import Link from "next/link"

export const metadata = {
    title: 'gonza | About',
}

const AboutPage = () => {
    return (
        <>
            <h1 className="text-2xl font-bold mt-[-16px]" >About</h1>
            <footer className='w-[150px] mt-auto mb-[50px]' >
                <h3 className='text-xs underline underline-offset-2 hover:underline-offset-1 decoration-amber-500 hover:text-amber-200' > 
                    <Link href='/' >Back to home</Link> 
                </h3>
            </footer>
        </>
    )
}

export default AboutPage