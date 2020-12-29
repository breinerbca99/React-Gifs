import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const hanldeInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            /* setCategories(cats => [...cats, inputValue]); */
            setCategories(cats => [inputValue, ...cats, ]);
            setInputValue('');
        }
    }
    return ( 
        <form onSubmit = { handleSubmit } >
        <input type = "text"
        value = { inputValue }
        onChange = { hanldeInputChange } > 
        </input> 
        </form >

    )
}

/* Esta es una regla o pequeño candado para que utilizen nuestro componente que estoy esperando */
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}