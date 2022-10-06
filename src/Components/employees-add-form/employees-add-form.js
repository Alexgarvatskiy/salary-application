import { useState } from 'react';
// import './employees-add-form.css';
import './employees-add-form.scss';

const  EmployeesAddForm = (props) => {

    const [name, setName] = useState('');
    const [salary, setSelary] = useState('');

    const onNameChange = (e) => {
        setName(e.target.name = e.target.value)
    }

    const onSalaryChange = (e) => {
        setSelary(e.target.salary = e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.onAdd(name, salary);
        setName('');
        setSelary('');

    }


    return (
        <div className="div app-add-form">
            <h3>add new employee</h3>
            <form 
                className="add-form d-flex"
                onSubmit={onSubmit}>
                <input type="text"
                        className="form-control new-post-label"
                        placeholder="What is your name?"
                        name="name"
                        value={name}
                        onChange={onNameChange}/>
                <input type="number"
                        className="form-control new-post-label"
                        placeholder="SALARY in $"
                        name="salary"
                        value={salary}
                        onChange={onSalaryChange}/>
                <button type="submit"
                        className="btn btn-online-light">
                            ADD
                </button>
            </form>  
        </div>
    )
}
export default EmployeesAddForm;