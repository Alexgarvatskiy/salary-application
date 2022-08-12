import './employees-add-form.css';

const EmployeesAddForm = () => {
    return(
        <div className="div app-add-form">
            <h3>add new employee</h3>
            <form 
                className="add-form d-flex">
                <input type="text"
                       className="form-control new-post-label"
                       placeholder="What is your name?"/>
                <input type="number"
                       className="form-control new-post-label"
                       placeholder="SALARY in $"/>
                <button type="submit"
                        className="btn btn-online-light">
                            ADD
                </button>
            </form>  
        </div>
    )
}

export default EmployeesAddForm;