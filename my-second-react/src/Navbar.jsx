
function Navbar(){
    return(

    
        <div className="w-full h-full absolute b-gradient-to-r from-blue-400 to-emerald-400">
  <header className="flex justify-between items-center py-6 px-8 text-black bg-white drop-shadow-md ">
  <a>
    <img src="" alt="logo image" className="" />
  </a>
  
  <ul className=" hidden xl:flex items-center gap-12 font-semibold">
   <li>internships</li>
    <li>Companies</li>
     <li>How it works</li> 
  </ul>

 

  <div className="relative hidden md:flex items-center gap-3"> 
    <p>login</p>
    <p>Sign up</p>
 </div>
   <i class="fa-solid fa-bars" className="xl:hidden"></i>
 
  </header>
   

        </div>
    );
    
}

export default Navbar