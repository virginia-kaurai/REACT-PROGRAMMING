//prop types is a mechanism that ensures thatthe data we pass to a component is of the correct type and shape

//default props are used to specify default values for props in a componenet

import propTypes from 'prop-types'

function Student(props){

    return(

        <div className="font-bold text-2xl text-grey-200 py-4 px-2 text-center shadow-lg">

            <p>Name:{props.name}</p>
            
            <p>Age:{props.age}</p>
            
            <p>School:{props.school}</p>
        </div>
    )
}

Student.propTypes = {
    name: propTypes.string,
    age:propTypes.number,
    school: propTypes.string,
}

Student.defaultProps ={

    name: "unknown",
    age: 0,
    school: "unknown"
}
export default Student