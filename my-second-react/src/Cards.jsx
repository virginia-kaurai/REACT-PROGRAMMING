function Cards(){
    return(
<>
<div className="justify-center items-center text-center py-10">
    <h1 className="font-semibold text-sm text-orange-400">HOW IT WORKS</h1>
    <br></br>
    <p className="">Three Steps For Your Next Chapter</p>

</div>



<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-300 gap-6 py-10 px-5">

    <div className=" bg-white shadow-lg p-2 rounded-lg ">
        <h1 className="text-xl font-bold text-green-500 ">Build <span className="text-orange-500 ">Your</span> Profile</h1>
        <p className="text-xl font-sans p-2">Add your skills, experience, and what kind of internship you're after. Takes about 3 minutes.</p>
    </div>

    <div className=" bg-white shadow-lg p-2 rounded-lg ">
        <h1 className="text-xl font-bold text-green-500 ">Apply <span className="text-orange-500 ">&</span> Connect</h1>
        <p className="text-xl font-sans p-2">One-click applications with your profile. Companies respond within 48 hours on average.</p>
    </div>

    <div className=" bg-white shadow-lg p-2 rounded-lg ">
        <h1 className="text-xl font-bold text-green-500 ">Get <span className="text-orange-500 ">Noticed</span></h1>
        <p className="text-xl font-sans p-2">Showcase your skills and experience to potential employers.</p>
    </div>
</div>
    </>
    );
}

export default Cards