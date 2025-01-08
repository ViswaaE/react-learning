import "./student.css"
import PropTypes from "prop-types"

function Student(props){
    return(
        <div className="Student">
            <p>Student_Name:{props.Student_Name}</p>
            <p>Student_Age:{props.Student_Age}</p>
            <p>Is_Student:{props.Is_Student ? " yes" : " no"}</p>
        </div>
    )
}
Student.PropTypes={
    Student_Name:props.string,
    Student_Age:props.number,
    Is_Student:props.bool
}
export default Student;