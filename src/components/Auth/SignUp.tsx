// import Stethoscope from '../../assets/Auth/Stethoscope.png'
import Injection from '../../assets/Auth/Injection.png'
import {FcGoogle} from 'react-icons/fc'
import {BsApple} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'

const SignUp = () => {
  return (
    <>
    <section className="bg-[#E0E4EC] text-black text-center text-xl h-auto w-full grid grid-cols-2">
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
          <div className='w-1/2 mx-auto flex gap-6 justify-center'>
            <FcGoogle size="35"/>
            <BsApple color="#000" size="35"/>
            <FaFacebook color="#1877F2" size="35"/>
          </div>
          <p className='my-3'>Already have an account? <a className='text-[#08299B]' href="#">Login</a></p>
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

export default SignUp