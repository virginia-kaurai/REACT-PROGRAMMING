

function Lists(){


    const fruits = ["apple","banana","mangoes","grapes"];

    const listItems = fruits.map(fruits => <li>{fruits}</li>);


    return(
        <ol>{listItems}</ol>
    );
}

export default Lists