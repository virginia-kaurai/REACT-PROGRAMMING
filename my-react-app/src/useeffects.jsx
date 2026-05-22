
import React ,{useState, useEffect} from 'react'


function Useeffects(){


    let [count,setCount  ] = useState(0);


     useEffect(()=>{
        document.title =`you have clicked ${count} times `
     }, []);

    function UpdateCount(){
        setCount(count+1); 
    }
    return(

<div>

    <p className='m-6 font-bold text-3xl'> count: {count}</p>
    <button className='bg-purple-500 rounded-md w-16 h-8 text-black font-bold hover:bg-purple-600 m-6' onClick={UpdateCount }>click me</button>
</div>



    );   

}

export default Useeffects