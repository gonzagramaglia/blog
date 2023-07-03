import Link from "next/link";

export const metadata = {
    title: '✍🏼 Fitness',
  }

const Frontend = () => {
    return (
        <>
            <div className='text-center w-[80%] lg:w-[50%]'>
                <h1 className="text-2xl font-bold mt-[-16px] mb-9" >Fitness</h1>
                <div className='ml-[-10px]'>
                    <a href='https://gonza.fit/gym' target="_blank" >
                        <h2 className='text-lg' >• <span className='underline underline-offset-2 hover:underline-offset-1 decoration-amber-500 hover:text-amber-200' >gym</span></h2>
                    </a>
                    <a href='https://gonza.fit/running' target="_blank" >
                        <h2 className='text-lg' >• <span className='underline underline-offset-2 hover:underline-offset-1 decoration-amber-500 hover:text-amber-200' >running</span></h2>
                    </a>
                    <a href='https://gonza.fit/nutrition' target="_blank" >
                        <h2 className='text-lg' >• <span className='underline underline-offset-2 hover:underline-offset-1 decoration-amber-500 hover:text-amber-200' >nutrition</span></h2>
                    </a>
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