import './app-filter.css';

const AppFilter = () => {
    return(
        <div className="btn-group">
            <buttom 
                className="btn button-light"
                type="button">
                    All employees
            </buttom>
            <buttom 
                className="btn button-outleine-light"
                type="button">
                    For a pay raise
            </buttom>
            <buttom 
                className="btn button-outleine-light"
                type="button">
                    Filter more 1000$
            </buttom>
        </div>
    )
}

export default AppFilter;