import './employees-list-item.css';

const Employeeslistitem = () => {
    return(
        <li className="list-group-item d-flex justify-content-between">
            <span className="list-group-item-lavel">Alexey Harvatskiy</span>
            <input type="text" className="list-group-item-input" defaultValue="1000$"/>
            <div className="d-flex justify-content-center aligh-items-center">

                <button type="buttom"
                        className="button btn-cookie btn-sm">
                        <i className="fas fa-cookie"></i>
                </button>

                <button type="buttom"
                        className="button btn-trash btn-sm">
                        <i className="fas fa-trash"></i>
                </button>

                <i className="fas fa-star"></i>
            </div>   
        </li>
    )
}

export default Employeeslistitem;