// import Stethoscope from '../../assets/Auth/Stethoscope.png'
import Injection from '../../assets/Auth/Injection.png'
import {FcGoogle} from 'react-icons/fc'

const SignUp = () => {
  return (
    <>
    <section className="bg-[#E0E4EC] text-black text-center text-xl h-screen w-full grid grid-cols-2">
      <article className="bg-white rounded-2xl ml-9 my-[4rem]">
        <h2 className='text-center font-bold text-4xl my-7'>Create An Account</h2>
        <form className='flex flex-col gap-3 pl-7'>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder='Enter Name'/>
          <label htmlFor="name">Email Address</label>
          <input type="email" placeholder='Enter Email Address'/>
          <label htmlFor="name">Password</label>
          <input type="password" placeholder='Enter Password'/>
          <button className='bg-[#08299B] text-white text-xl w-1/2 mx-auto p-2 rounded-xl'>Create Account</button>
          <p className='w-1/2 mx-auto font-semibold text-2xl text-black'>OR</p>
            {/* ICONS  */}
          <div>
            <FcGoogle/>
          </div>
        </form>
      </article>
      <article className='bg-Sthethoscope'></article>
    </section>
    </>
  )
}

export default SignUp