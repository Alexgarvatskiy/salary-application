import './employees-list-item.css';

const  Employeeslistitem = (props) => {

    const {name, salary, onDelite, onToggleProps, increase, like} = props;

    let classNames = "list-group-item d-flex justify-content-between";
    if(increase) {
        classNames += " increase";
    }

    if (like) {
        classNames += " like"
    }

    return(
        <li className={classNames}>
            <span className="list-group-item-lavel" onClick={onToggleProps} data-toggle="like">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className="d-flex justify-content-center aligh-items-center">

                <button type="buttom"
                        className="btn-cookie btn-sm"
                        onClick={onToggleProps}
                        data-toggle="increase">
                        <i className="fas fa-cookie"></i>
                </button>

                <button type="buttom"
                        className="button btn-trash btn-sm"
                        onClick={onDelite}>
                        <i className="fas fa-trash"></i>
                </button>

                <i className="fas fa-star"></i>
            </div>   
        </li>
    )
}

export default Employeeslistitem;