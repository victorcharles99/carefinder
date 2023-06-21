const Footer = () => {
  return (
    <section className="px-10 py-8 bg-[#E0E4EC] -mt-[1.47rem] text-black text-2xl">
        <article className="grid grid-cols-[2fr_1fr_1fr]">
            <div className="flex flex-col gap-5">
                <h3 className='text-[#08299B] font-semibold'>CareFinder</h3>
                <p className="w-1/2">Plot 42, Akinza Street, Victoria Island, Lagos.
                    +2349167351788
                </p>
            </div>
            <div className="flex flex-col gap-5">
                <h3 className='text-[#08299B] font-semibold'>About Us</h3>
                <div>
                    <p className='py-2'><a href="#">News & Media</a></p>
                    <p><a href="#">Contact Us</a></p>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <h3 className='text-[#08299B] font-semibold'>Quick Links</h3>
                <div>
                    <p><a href="#">My account</a></p>
                    <p className='py-2'><a href="#">Book an appointment</a></p>
                    <p><a href="#">Library</a></p>
                </div>
            </div>
        </article>
    </section>
  )
}

export default Footer