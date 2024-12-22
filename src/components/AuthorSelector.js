import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import axios from 'axios';

const AuthorSelector = ({ onSelectAuthor }) => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => setAuthors(response.data))
            .catch(error => console.error('Error fetching authors:', error));
    }, []);

    const handleAuthorChange = (event, value) => {
        onSelectAuthor(value ? value.id : null);
    };

    return (
        <Autocomplete
            options={authors}
            getOptionLabel={(option) => option.name}
            onChange={handleAuthorChange}
            renderInput={(params) => <TextField {...params} label="Выберите автора" variant="outlined" />}
            sx={{ width: 300, backgroundColor: '#f0f0f0'}}
        />
    );
};

export default AuthorSelector;