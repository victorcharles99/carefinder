import Hospital from '../../assets/Landing Page/hospital.png'
import Doctor from '../../assets/Landing Page/chatDoctor.png'
import Export from '../../assets/Landing Page/export.png'
import Share from '../../assets/Landing Page/share.png'
import Biggest from '../../assets/Landing Page/How it works/BiggestEclipse.png'
import Bigger from '../../assets/Landing Page/How it works/BiggerEclipse.png'
import Big from '../../assets/Landing Page/How it works/BigEclipse.png'
import FindHospital from '../../assets/Landing Page/How it works/FindHospital.png'
import SaveHospital from '../../assets/Landing Page/How it works/SaveHospital.png'
import BookAppointment from '../../assets/Landing Page/How it works/BookAppointment.png'
import MakeVisit from '../../assets/Landing Page/How it works/MakeVisit.png'
import Arrow1 from '../../assets/Landing Page/How it works/Arrow 1.png'
import Arrow2 from '../../assets/Landing Page/How it works/Arrow 2.png'
import Arrow3 from '../../assets/Landing Page/How it works/Arrow 3.png'


const SectionThree = () => {
  return (
    <section className="bg-white border border-red-500 text-black">
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

            <section className='  border border-green-500  overflow-hidden pb-[5rem] relative'>
                <div className='absolute index-0 z-20 flex items-center justify-between w-4/5 h-full  mx-auto left-0 right-0'>
                    <div className=' ml-[3rem] -mt-[5rem] w-1/4'>
                        <img src={FindHospital} alt="Find Hospital" />
                        <h3 className='font-bold text-base py-2'>Find Hospital</h3>
                        <p className='font-medium w-2/3 py-2 text-xs'>Find the best hospitals and doctors near you, our efficient search engine provides you with the best results.</p>
                    </div>
                    <img src={Arrow1} alt="Arrow 1" className='w-[8rem] ml-[3rem] -mt-[9rem] transform rotate-6 scale-150 ' />
                    <div className=' mt-[16rem] ml-[1rem] w-1/2'>
                        <img src={SaveHospital} alt="Save Hospital" />
                        <h3 className='font-bold text-base py-2 w-1/2 text-center'>Save or share hospital</h3>
                        <p className='font-medium w-1/2 py-2 text-xs text-center'>Carefinder allows users to save and share the list of hospitals with others.
                        Users can share the information via email or by generating a shareable link</p>
                    </div>
                    <img src={Arrow2} alt="" className='w-[8rem] -ml-[15rem] -mt-[5rem]  scale-150 transform -rotate-[17deg]' />
                    <div className=' -mt-[10rem] -mr-[9rem]'>
                        <img src={BookAppointment} alt="Book Appointment" />
                        <h3 className='font-bold text-base py-2 w-2/3'>Book Appointment</h3>
                        <p className='font-medium w-1/2 py-1 text-xs text-center'>Book appointments easily by inputting correct details</p>
                    </div>
                    <img src={Arrow3} alt="" className='w-[10rem] ml-[7rem] -mt-[2rem] transform -rotate-[4deg] scale-150'/>
                    <div className=' mt-[20rem] -mr-[10rem] flex flex-col items-center '>
                        <img src={MakeVisit} alt="Make a visit" />
                        <h3 className='font-bold text-base text-center py-2 w-2/3'>Make a Visit</h3>
                        <p className='font-medium w-1/2 py-1 text-xs text-center'>Appointment confirmed, then make a visit to your selected hospital or doctor</p>
                    </div>
                </div>
                <img src={Biggest} alt="Biggest Eclipse" className='w-full h-auto'/>
                <h1 className='absolute inset-0 flex justify-center font-bold text-4xl text-[#08299B] py-[2rem] text-center'>How it works</h1>
                <div className='absolute inset-0 flex items-center justify-center'>
                    <img src={Bigger} alt="Bigger Eclipse" className='mt-5'/>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <img src={Big} alt="Big Eclipse" className='mt-[8.5rem]'/>
                    </div>
                </div>

                
                
            </section>
    </section>
  )
}

export default SectionThree