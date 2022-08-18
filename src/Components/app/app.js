import { Component } from 'react';

import Appinfo from '../app-info.js/app-info.js';
import SearchPenal from '../search-panel/search-panel.js';
import AppFilter from '../app-filter/app-filter.js';
import EmpoersList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css'




class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name: "Alex G", salary: "1000", increase: true, id: 1},
                {name: "Alex G", salary: "1500", increase: true, id: 2},
                {name: "Alex G", salary: "2000", increase: true, id: 3},
                {name: "Alex G", salary: "3000", increase: true, id: 4}
            ]
        }
    }

    deliteItem = (id) => {
       this.setState(({data}) => {


        const index = data.findIndex(elem => elem.id === id) 
        const before = data.slice(0, index);
        const after = data.slice(index + 1);
        const newArray = [...before, ...after];


        return {
            data: newArray
        }

       })
    }

    render() {
        return(
            <div className="app">
                <Appinfo/>
    
                <div className="search-panel">
                    <SearchPenal/>
                    <AppFilter/>
                </div>
    
                <EmpoersList data={this.state.data}
                onDelite={this.deliteItem}/>
                <EmployeesAddForm/>
            </div>
        );
    }
}


export default App;