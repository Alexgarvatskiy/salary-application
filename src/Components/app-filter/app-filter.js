import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'All employees'},
        {name: 'like', label: 'For a pay raise'},
        {name: 'moreThen1000', label: 'Filter more 1000$'}
    ]

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? "btn button-light" : "btn button-outleine-light"
        return (
        <buttom 
            className={`btn ${clazz}`}
            type="button"
            key={name}
            onClick={() => props.onFilterSelect(name)}>
                {label}
        </buttom>
        )
    })

    return(
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;