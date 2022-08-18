import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        const {name, salary} = this.state

        return (
            <div className="div app-add-form">
                <h3>add new employee</h3>
                <form 
                    className="add-form d-flex">
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="What is your name?"
                           name="name"
                           value={name}
                           onChange={this.onValueChange}/>
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="SALARY in $"
                           name="salary"
                           value={salary}
                           onChange={this.onValueChange}/>
                    <button type="submit"
                            className="btn btn-online-light">
                                ADD
                    </button>
                </form>  
            </div>
        )
    }
    }

export default EmployeesAddForm;