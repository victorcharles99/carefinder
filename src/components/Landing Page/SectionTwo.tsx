import IMG1 from  '../../assets/Landing Page/Section2.1.png'
import IMG2 from  '../../assets/Landing Page/Section2.2.png'
import Hospital from '../../assets/Landing Page/hospital.png'
import Doctor from '../../assets/Landing Page/chatDoctor.png'
import Export from '../../assets/Landing Page/export.png'
import Share from '../../assets/Landing Page/share.png'

const SectionTwo = () => {
  return (
    <>
        <section className="bg-white -mt-5">
            <div className=" py-10 grid grid-cols-[1.8fr_1fr]">
                {/* Grid Image */}
                <article className=''>
                    <div className='flex'>
                    <img src={IMG1} alt="A patient pressing her phone" className='w-[24.25rem] h-[44rem]'/>
                    <img src={IMG2} alt="A woman checking her bp by a doctor" className='w-[24.25rem] h-[44rem] ml-4 mt-9'/>
                    </div>
                </article>
                {/* Grid Text */}
                <article className=''>
                    <div className=' mt-9 flex flex-col justify-between h-[40rem] text-center'>
                        <div className='text-center text-black font-bold text-4xl'>
                            <p>Welcome to</p> <br /> 
                            <h2 className='text-[#08299B]  bg-red-500'>Carefinder</h2>
                        </div>
                        <p className='text-center text-black text-3xl font-medium'>Carefinder is a platform where users can search for hosiptals in their areas, export hospital details for your records and enhance your healthcare experience by connecting with others and sharing valuable resources.</p>
                        <button className="uppercase bg-[#08299B] text-white text-2xl p-2 italic w-1/2 mx-auto">Our Services</button>
                    </div>
                </article>
            </div>

            {/* Article Two */}
            <section className='grid grid-cols-4 my-6 gap-3'>
                {/* Card One */}
                <article className='bg-[#E0E4EC] text-center pt-2 pb-5 rounded-lg'>
                    <div className='w-1/2 mx-auto bg-red-500 border border-green-600'>
                        <div className='bg-[#08299B] w-[5rem] aspect-square rounded-full mx-auto'>
                            <img src={Hospital} alt="Hospital" className='w-3/4 aspect-square mx-auto pt-2'/>
                        </div>
                        <p className='font-bold text-base py-3 text-center'>Search Doctors</p>
                        <p className='text-xs font-medium text-center py-3'>Effortlessly find the best hospital near you</p>
                    </div>
                </article>
                {/* Card Two */}
                <article></article>
                {/* Card Three */}
                <article></article>
                {/* Card Four */}
                <article></article>
            </section>
        </section>
    </>
  )
}

export default SectionTwo