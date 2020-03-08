import React from 'react';

import './search-box.css';

export const SearchBox = (props) => {
    return(
        <input type="search" className='search' onChange={props.onChange} placeholder={props.placeholder} />
    )
}