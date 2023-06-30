import Hospital from '../../assets/Landing Page/hospital.png'
import Doctor from '../../assets/Landing Page/chatDoctor.png'
import Export from '../../assets/Landing Page/export.png'
import Share from '../../assets/Landing Page/share.png'
// import Biggest from '../../assets/'
import Biggest from '../../assets/Landing Page/How it works/BiggestEclipse.png'
import Bigger from '../../assets/Landing Page/How it works/BiggerEclipse.png'
import Big from '../../assets/Landing Page/How it works/BigEclipse.png'


const SectionThree = () => {
  return (
    <section className="bg-white border border-red-500">
        {/* CARDS */}
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

            {/* How It Works */}

            <section className=' bg-red-500 border border-green-500 h-screen'>
                {/* <article className='w-11/12 aspect-square'> */}
                    <div className='bg-BiggestEclipse w-auto h-4/5 relative'>
                        <div className='bg-BiggerEclipse w-2/3 h-full'></div>
                        {/* <div className='bg-BiggerEclipse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full'>Hey</div> */}
                        <div className='bg-BigEclipse'></div>
                    </div>
                {/* </article> */}
            </section>
    </section>
  )
}

export default SectionThree