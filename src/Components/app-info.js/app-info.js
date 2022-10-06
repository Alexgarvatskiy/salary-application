import './app-info.css';

const Appinfo = ({employees, increased}) => {
    return( 
        <div className="app-info">
            <h1>employee records in the company</h1>
            <h2>total number employee: {employees}</h2>
            <h2>the award will go to: {increased}</h2>
        </div>
    )
}

export default Appinfo;