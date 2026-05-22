

function Car(){

    const cars = [ {id:100, name:"bMW",price:50000},
                   {id:101, name:"audi",price:60000},
                   {id:102, name:"mercedes",price:70000}
    ];

    const carList = cars.map(car=> <li key={car.id} > i am a Name: {car.name},  i cost Price: ${car.price}</li>);
    const carexpensive = cars.filter(car => car.price >60000)

    return(
        <ol>{carexpensive.map(car => <li key={car.id}>Name: {car.name}, Price: ${car.price}</li>)}</ol>
    );
}

export default Car