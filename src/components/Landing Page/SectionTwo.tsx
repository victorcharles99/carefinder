import IMG1 from  '../../assets/Landing Page/Section2.1.png'
import IMG2 from  '../../assets/Landing Page/Section2.2.png'

const SectionTwo = () => {
  return (
    <section className="bg-white -mt-5">
        <div className=" py-10 grid grid-cols-[1.8fr_1fr]">
            {/* Grid Image */}
            <article className='border border-purple-600'>
                <div className='flex'>
                <img src={IMG1} alt="A patient pressing her phone" className='w-[24.25rem] h-[44rem]'/>
                <img src={IMG2} alt="A woman checking her bp by a doctor" className='w-[24.25rem] h-[44rem] ml-4 mt-9'/>
                </div>
            </article>
            {/* Grid Text */}
            <article className='border border-red-500'>
                <div className='border border-green-500 mt-9 flex flex-col justify-between h-[40rem] text-center'>
                    <div className='text-center text-black font-bold text-4xl'>
                        <p>Welcome to</p> <br /> 
                        <h2 className='text-[#08299B]  bg-red-500'>Carefinder</h2>
                    </div>
                    <p className='text-center text-black text-3xl font-medium'>Carefinder is a platform where users can search for hosiptals in their areas, export hospital details for your records and enhance your healthcare experience by connecting with others and sharing valuable resources.</p>
                    <button className="uppercase bg-[#08299B] text-white text-2xl p-2 italic w-1/2 mx-auto">Our Services</button>
                </div>
            </article>
        </div>
    </section>
  )
}

export default SectionTwo