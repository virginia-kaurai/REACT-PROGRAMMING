//  usesttate is used to store  and manage state in a functional component

//onchange is an event handler that is triggered when the value of an input element changes

import  React, {useState} from 'react'
function Usestate(){

  let [name, setName] = useState("");
  let [age,setAge] = useState(0);
  let[colour,setColour] =useState("");
  let[payment,setPayment] = useState();

function Handlechangeevent(e){
    setColour(e.target.value);
}
function handlepayment(e){

    setPayment(e.target.value);
}
    const incrementAge = () => {
        setAge(age+1);
    }


    const updateName = () => {
        setName("virginia");
    };

    return(

<div className='text-center'>
    <p className='font-bold text-3xl p-4'> Name :{name}</p>
    <button className='rounded-md bg-blue-500 w-32 h-16 text-white p-4' onClick={updateName}> Set Name</button>


    <p className='font-bold text-3xl p-4'> Age :{age}</p>
    <button className='rounded-md bg-red-900 w-32 h-16 text-white p-4' onClick={incrementAge}> Set Age</button>
    <br></br>

    <input className='border p-2 mt-4' value={colour} onChange={Handlechangeevent}/>
    <p>colour: {colour}</p>

    <select value={payment} onChange={handlepayment}>
        <option>select payment</option>
        <option>visa</option>
        <option>mastercard</option>
        <option>paypal</option>
    </select>
    <p><payment>payment</payment></p>
</div>

    );
}

export default Usestate