import Employeeslistitem from "../employees-list-item/employees-list-item";
import './empoyees-list.css';


const EmpoersList = ({data, onDelite, onToggleProps}) => {



    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return(
            <Employeeslistitem
            // name={item.name} salary={item.salary}
            key={id}
            {...itemProps} // object destructuring 
            onDelite={() => onDelite(id)}
            onToggleProps={(e) => onToggleProps(id, e.currentTarget.getAttribute('data-toggle'))}/>    
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmpoersList;