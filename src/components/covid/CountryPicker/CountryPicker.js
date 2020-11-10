import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api/covid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: '100%',
        textAlign: 'center',
        marginBottom: '30px !important',
    },
    select: {
        backgroundColor: '#1a2430',
        color: 'white',
        width: '30%',
        margin: 'auto',
        textAlign: 'center',
        paddingLeft: 20,
        '@media (max-width: 768px)': {
            width: '100%',
          },
    },
    option: {
        backgroundColor: '#1a2430 !important',
        color: 'white',
        paddingLeft: 20,
    }
  }));

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedCountries]);

    return (
        <FormControl className={classes.formControl}>
            <NativeSelect className={classes.select} defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option className={classes.option} value="">Not Global</option>
                {fetchedCountries.map((country, i) => <option className={classes.option} key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
