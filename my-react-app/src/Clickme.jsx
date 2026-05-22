

function Clickme(){

    let count = 0;

    const handleclick = () => {
        if (count < 5){
            count++;
            console.log(`${name} you have clicked me ${count} times`);
        }
        else{
            console.log(`${name} you have reached the maximum clicking limit`);
        }
    }

return(

    <button onClick={() => handleclick("virginia")}>click here</button>
);
}


export default Clickme