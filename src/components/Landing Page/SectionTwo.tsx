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
                            <h2 className='text-[#08299B]'>Carefinder</h2>
                        </div>
                        <p className='text-center text-black text-3xl font-medium'>Carefinder is a platform where users can search for hosiptals in their areas, export hospital details for your records and enhance your healthcare experience by connecting with others and sharing valuable resources.</p>
                        <button className="uppercase bg-[#08299B] text-white text-2xl p-2 italic w-1/2 mx-auto">Our Services</button>
                    </div>
                </article>
            </div>

            {/* Article Two */}
            <section className='grid grid-cols-4 my-6 pb-8 gap-3'>
                {/* Card One */}
                <article className='bg-[#E0E4EC] text-center ml-2 pt-2 pb-5 rounded-lg text-black'>
                    <div className='w-1/2 mx-auto'>
                        <div className='bg-[#08299B] w-[5rem] aspect-square rounded-full mx-auto'>
                            <img src={Hospital} alt="Hospital" className='w-3/4 aspect-square mx-auto pt-2'/>
                        </div>
                        <p className='font-bold text-base py-3 text-center'>Search Hospitals</p>
                        <p className='text-xs font-medium text-center py-3'>Effortlessly Find the Best hospital Near You</p>
                    </div>
                </article>
                {/* Card Two */}
                <article className='bg-[#E0E4EC] text-center  pt-2 pb-5 rounded-lg text-black'>
                    <div className='w-1/2 mx-auto'>
                        <div className='bg-[#08299B] w-[5rem] aspect-square rounded-full mx-auto'>
                            <img src={Doctor} alt="Doctor" className='w-3/4 aspect-square mx-auto pt-2'/>
                        </div>
                        <p className='font-bold text-base py-3 text-center'>Search Doctors</p>
                        <p className='text-xs font-medium text-center py-3'>EffortlesslyFfind the Best Doctors Near You</p>
                    </div>
                </article>
                {/* Card Three */}
                <article className='bg-[#E0E4EC] text-center  pt-2 pb-5 rounded-lg text-black'>
                    <div className='w-1/2 mx-auto'>
                        <div className='bg-[#08299B] w-[5rem] aspect-square rounded-full mx-auto'>
                            <img src={Export} alt="Export" className='w-3/4 aspect-square mx-auto pt-2'/>
                        </div>
                        <p className='font-bold text-base py-3 text-center'>Export Hospitals </p>
                        <p className='text-xs font-medium text-center py-3'>Save list of hospitals.</p>
                    </div>
                </article>
                {/* Card Four */}
                <article className='bg-[#E0E4EC] text-center  pt-2 pb-5 rounded-lg text-black'>
                    <div className='w-1/2 mx-auto'>
                        <div className='bg-[#08299B] w-[5rem] aspect-square rounded-full mx-auto'>
                            <img src={Share} alt="Share" className='w-3/4 aspect-square mx-auto pt-2'/>
                        </div>
                        <p className='font-bold text-base py-3 text-center'>Share Hospitals</p>
                        <p className='text-xs font-medium text-center py-3'>Share the list of hospitals with others.</p>
                    </div>
                </article>
            </section>
        </section>
    </>
  )
}

export default SectionTwo