import profilepic from './assets/cake1.jpg';

function Card() {
    return (
        <div className='bg-gery-200 p-6 rounded-lg shadow-md '>
            <img className='p-4 rounded-md' src={profilepic} alt="Chocolate cake" />
            <h3 className='text-3xl font-bold p-4'>Chocolate Cake</h3>
            <p className='p-6 text-2xl'>This chocolate cake is very sweet.A chocolate cake is a rich, moist dessert made with cocoa or<br></br> melted chocolate,often layered and covered with smooth chocolate frosting.</p>
        </div>
    );
}

export default Card;