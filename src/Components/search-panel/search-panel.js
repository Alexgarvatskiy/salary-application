import { useState } from 'react';
import './search-panel.css';

const SearchPenal = (props) => {

    const [term, setTerm] = useState('');

    const onUpdateTerm = (e) => {
        const term = e.target.value;
        setTerm(term);
        props.onUpdateSearch(term);
    }

    return(
        <input
            type="text"
            className="form-control search-input"
            placeholder="employee search"
            value={term}
            onChange={onUpdateTerm}/>
    )
}

export default SearchPenal;