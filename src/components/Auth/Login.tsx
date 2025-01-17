// import Stethoscope from '../../assets/Auth/Stethoscope.png'
import Injection from '../../assets/Auth/Injection.png'
import {FcGoogle} from 'react-icons/fc'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <section className="bg-[#E0E4EC] text-black text-center text-xl h-auto w-full grid grid-cols-2">
      <article className="bg-white rounded-2xl ml-9 my-[4rem]">
        <h2 className='text-center font-bold text-4xl mt-6 mb-3'>Welcome Back</h2>
        <p className='text-center font-semibold py-2'>Login using correct details!</p>
        <form className='flex flex-col gap-3 pl-7 mt-6'>
          <label htmlFor="name">Email Address</label>
          <input type="email" placeholder='Enter Email Address'/>
          <label htmlFor="name">Password</label>
          <input type="password" placeholder='Enter Password'/>
          <button className='bg-[#08299B] text-white text-xl w-1/2 mx-auto my-5 p-2 rounded-xl'>Login</button>
          <p className='w-1/2 mx-auto font-semibold text-2xl text-black'>OR</p>
          <p className='w-1/2  mx-auto font-semibold mt-4 mb-3'>Login using</p>
            {/* ICONS  */}
          <div className='w-1/2 mx-auto flex gap-6 justify-center'>
            <FcGoogle size="35"/>
            <AiOutlineTwitter color="#1DA1F2" size="35"/>
            <FaFacebook color="#1877F2" size="35"/>
          </div>
          <p className='mt-6'>Already have an account? <Link to="/signup" className='text-[#08299B]'>Signup!</Link></p>
        </form>
      </article>
      <article className='bg-Sthethoscope'>
        <h1 className='text-[#08299B] text-4xl font-bold text-center py-8'>Carefinder</h1>
        <h3 className='text-4xl font-bold text-center py-4 w-1/2 mx-auto leading-snug'>Join Our Community</h3>
        <p className='text-[#333232] text-xl font-semibold text-center py-2 w-1/2 mx-auto'>Enjoy seamless access to medical services</p>
        <div className='pb-12 pt-2'>
          <img src={Injection} alt="A nurse giving Injection to her patient" />
        </div>
      </article>
    </section>
    </>
  )
}

export default Login