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
                {name: "Alex G", salary: "1000", increase: false, like: false, id: 1},
                {name: "Dima E", salary: "1500", increase: false, like: false, id: 2},
                {name: "Denis S", salary: "2000", increase: false, like: false, id: 3},
                {name: "Roma A", salary: "3000", increase: false, like: false, id: 4}
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4;
    }

    deliteItem = (id) => {
       this.setState(({data}) => {
        return {
            data: data.filter(item => item.id !== id)
        }
       });
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            like: false,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProps = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if(term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > - 1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'like':
                return items.filter(item => item.like);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return(
            <div className="app">
                <Appinfo employees={employees} increased={increased}/>
    
                <div className="search-panel">
                    <SearchPenal onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
    
                <EmpoersList 
                data={visibleData}
                onDelite={this.deliteItem}
                onToggleProps={this.onToggleProps}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;