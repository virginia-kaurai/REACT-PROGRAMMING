import React, {useState} from 'react'

function Foods(){

const FoodData=[
  {
    "id": 1,
    "name": "Apple",
    "category": "fruits",
    "price": 120,
    "rating": 4.5,
    "tags": ["fresh", "healthy", "sweet"],
    "image":"images/single-banana-isolated-white-background.jpg"
  },
  {
    "id": 2,
    "name": "Banana",
    "category": "fruits",
    "price": 80,
    "rating": 4.2,
    "tags": ["energy", "sweet", "soft"],
    "image":"/images/single-banana-isolated-white-background.jpg"
  },
  
  {
    "id": 3,
    "name": "Orange",
    "category": "fruits",
    "price": 100,
    "rating": 4.3,
    "tags": ["citrus", "fresh", "vitamin c"],
    "image":"/images/orangejuice.jpg"
  },
  {
    "id": 4,
    "name": "Mango",
    "category": "fruits",
    "price": 150,
    "rating": 4.8,
    "tags": ["tropical", "sweet", "juicy"],
    "image":"/images/orangejuice.jpg"
  },
  {
    "id": 5,
    "name": "Pineapple",
    "category": "fruits",
    "price": 180,
    "rating": 4.4,
    "tags": ["tropical", "tangy", "fresh"],
    "image":"/images/orangejuice.jpg"
  },

  {
    "id": 6,
    "name": "Chocolate Cake",
    "category": "cake",
    "price": 500,
    "rating": 4.9,
    "tags": ["sweet", "dessert", "chocolate"],
    "image":"/images/orangejuice.jpg"
  },
  {
    "id": 7,
    "name": "Vanilla Cake",
    "category": "cake",
    "price": 450,
    "rating": 4.6,
    "tags": ["sweet", "classic", "dessert"],
    "image":"/images/orangejuice.jpg"
  },
  {
    "id": 8,
    "name": "Red Velvet Cake",
    "category": "cake",
    "price": 600,
    "rating": 4.8,
    "tags": ["luxury", "sweet", "cream"],
    "image":"/images/orangejuice.jpg"
  },
  {
    "id": 9,
    "name": "Strawberry Cake",
    "category": "cake",
    "price": 550,
    "rating": 4.7,
    "tags": ["fruity", "sweet", "dessert"],
    "image":"/images/orangejuice.jpg"
  },
  {
    "id": 10,
    "name": "Black Forest Cake",
    "category": "cake",
    "price": 650,
    "rating": 4.9,
    "tags": ["chocolate", "cream", "dessert"],
    "image":"/images/orangejuice.jpg"
  },

  {
    "id": 11,
    "name": "Orange Juice",
    "category": "drink",
    "price": 200,
    "rating": 4.5,
    "tags": ["fresh", "citrus", "cold"],
    "image":"/images/orangejuice.jpg"
  },
  {
    "id": 12,
    "name": "Mango Juice",
    "category": "drink",
    "price": 220,
    "rating": 4.6,
    "tags": ["tropical", "sweet", "cold"],
    "image":"/images/orangejuice.jpg"
  },
  {
    "id": 13,
    "name": "Milkshake",
    "category": "drink",
    "price": 300,
    "rating": 4.7,
    "tags": ["creamy", "sweet", "cold"],
    "image":"/images/orangejuice.jpg"
  },
  {
    "id": 14,
    "name": "Coffee",
    "category": "drink",
    "price": 250,
    "rating": 4.4,
    "tags": ["hot", "energy", "bitter"],
    "image":"/images/orangejuice.jpg"
  },
  {
    "id": 15,
    "name": "Tea",
    "category": "drink",
    "price": 150,
    "rating": 4.3,
    "tags": ["hot", "relaxing", "light"],
    "image":"/images/orangejuice.jpg"
  },
  {
    "id": 16,
    "name": "Lemonade",
    "category": "drink",
    "price": 180,
    "rating": 4.5,
    "tags": ["citrus", "refreshing", "cold"],
    "image":"/images/orangejuice.jpg"
  }
];

const [filter,setFilter] = useState("All");

const handleClick = (category)=>{

    setFilter(category);
}

const FilterData = FoodData.filter((food) => {
    if (filter === "All") return true;
    return food.category === filter;
});


    return(
<>
        <div className='flex justify-center gap-8  border border-black rounded-md p-4' >

<button onClick = {() =>  handleClick ("All")} className='bg-blue-400 text-white'>all</button>
<button onClick = {() => handleClick ("fruits")} className='bg-green-400 text-white'>Fruits</button>
<button onClick = {() =>  handleClick ("drink")} className='bg-yellow-400 text-white'>Drink</button>
<button onClick = {() =>  handleClick ("cake")} className='bg-purple-400 text-white'>Cakes</button>
        </div>

        <div  className="grid grid-cols-3 gap-4 mt-4">
     {
        FilterData.map((food,id)=> (
            <div>
                <h3>{food.name}</h3>
                <p>Price: ${food.price}</p>
                <p>Rating: {food.rating}</p>
                <img src={food.image} alt={food.name} className="w-32 h-32 object-cover" />
            </div>


        )
        )
     }
        </div>

        </>
    );
}

export default Foods