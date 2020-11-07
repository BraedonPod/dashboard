import React from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: '100%',
        textAlign: 'center',
    },
    select: {
        backgroundColor: '#757575',
        color: 'white',
        width: '40%',
        margin: 'auto',
        textAlign: 'center',
        paddingLeft: 20,
        '@media (max-width: 768px)': {
            width: '100%',
          },
    },
    option: {
        backgroundColor: '#757575 !important',
        color: 'white',
        paddingLeft: 20,
    }
  }));

const Picker = ({ handleMapChange }) => {
    const classes = useStyles();

    return (
        <FormControl className={classes.formControl}>
        <NativeSelect className={classes.select} defaultValue="all_day" onChange={(e) => handleMapChange(e.target.value)}>
            <option className={classes.option} value="all_hour">Past Hour</option>
            <option className={classes.option} value="all_day">Past Day</option>)
            <option className={classes.option} value="all_week">Past 7 Days *Slow*</option>)
            <option className={classes.option} value="all_month">Past 30 Days *Slow*</option>)
        </NativeSelect>
    </FormControl>
    )
}

export default Picker
