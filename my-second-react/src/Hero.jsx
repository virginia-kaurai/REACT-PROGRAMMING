

function Hero(){
return(

< >
<div className="grid grid-cols-1 md:grid-cols-2">
    <div className=" flex flex-col justify-center items-start gap-6 w-full h-full leading-relaxed pt-28  px-5">
    <h1 className="bg-green-100 text-green-700 rounded-full  px-4 py-1">Over 200 opportunities posted this month</h1>
<p className="text-5xl  font-bold">
Where Ambition <br></br>Meets <span className="text-orange-400"> opportunity</span>

</p>

<p className="text-lg  max-w-xl text-gray-500">The internship portal that connects driven students with forward-thinking companies. No noise, just the right fit.</p>


    </div>

    <div>
      <img src="document-marketing-strategy-business-concept.jpg" alt="logo image" className="w-full  mt-28 px-6" />

    </div>


    <div className="flex  gap-10 py-6 mx-6 " >

    <button className=" bg-orange-400 text-black text-xl rounded-full  py-2 px-2  hover:bg-white text-black " > Find Internship <i class="fa-solid fa-arrow-right"></i></button>
    
    <button className="text-gray-500  border border-gray-500 text-xl rounded-full   py-2 px-2 hover:bg-orange-400 text-black"> Post a position</button>
</div>
    </div>

    </>
);

}

export default Hero