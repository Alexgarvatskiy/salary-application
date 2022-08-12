import Appinfo from '../app-info.js/app-info.js';
import SearchPenal from '../search-panel/search-panel.js';
import AppFilter from '../app-filter/app-filter.js';
import EmpoersList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css'


function App() {
    return(
        <div className="app">
            <Appinfo/>

            <div className="search-panel">
                <SearchPenal/>
                <AppFilter/>
            </div>

            <EmpoersList/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;