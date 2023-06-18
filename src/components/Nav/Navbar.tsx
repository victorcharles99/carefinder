const Navbar = () => {
  return (
    <header className="grid grid-cols-[1fr_1.5fr] gap-2 bg-white justify-between px-32 py-2">
        <h1 className="text-[#08299B] font-bold text-2xl p-3">Carefinder</h1>
        <nav className="">
            <ul className="list-none flex space-x-2 font-semibold text-xl justify-center ">
                <li className="text-slate-900 p-3 ml-2">Home</li>
                <li className="text-slate-900 p-3">About</li>
                <li className="text-[#1E1E1E] p-3">Find Hospital</li>
                <li className="text-white bg-[#08299B] rounded-xl py-3 px-7 ml-2">Login</li>
                <li className="text-white bg-[#08299B] rounded-xl py-3 px-7 -mr-5">Signup</li>
            </ul>
        </nav>
    </header>
  )
}
export default Navbar