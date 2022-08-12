import Employeeslistitem from "../employees-list-item/employees-list-item";
import './empoyees-list.css';


const EmpoersList = () => {
    return (
        <ul className="app-list list-group">
            <Employeeslistitem/>
            <Employeeslistitem/>
            <Employeeslistitem/>
            <Employeeslistitem/>
        </ul>
    )
}

export default EmpoersList;