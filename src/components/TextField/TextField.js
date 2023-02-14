import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import BrowserButton from '../Button/BrowserButton/BrowserButton';
import {useState} from 'react';
import axios from 'axios';



function BasicTextFields() {

    const [value, setValue ] = useState ("");

    // const [setUserData] = useState({});

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const api = "https://63c761b4dcdc478e15d3f6f8.mockapi.io/producto/";

    const onSubmit = (e) => {
        e.preventDefault();
        const userInput = value.toLocaleLowerCase().replace(/ /g, "");
        console.log(userInput);
        if (userInput) {
            axios(`${api}${userInput}`)
            .then((res) => console.log(res.data));
        }
    }


return (
    <Box
    component="form"
    onSubmit={onSubmit}
    sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    >
    <TextField id="outlined-basic" label="Buscar un producto" variant="outlined" value={value} onChange={onChange} />
    <BrowserButton/>
    </Box>
);
}

export default BasicTextFields;