import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from "@material-ui/core/Divider";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles({
    root: {
        maxWidth: '50%',
        '@media (max-width: 768px)': {
            maxWidth: '90%',
        },
        color: 'white',
        backgroundColor: '#1a2430',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 100,
        padding: 20,
        '& .MuiOutlinedInput-root': {
            color: 'white',
            marginBottom: 20,
            '& fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'lightblue',
            },
        },
        '& .MuiFormLabel-root': {
            color: 'rgba(255,255,255,0.5)',
        },
    },
    form: {
        display: 'grid',
    },
    button: {
        backgroundColor: '#0d1219',
        color: 'white',
        '&:hover' : {
            backgroundColor: '#234e8a',
        },
    }
});

function Index() {
    const classes = useStyles();

    return (
        <>
            <div className="container">
                <Card className={classes.root}>
                    <CardHeader title="Contact" />
                    <Divider />
                    <CardContent>
                        <form noValidate autoComplete="off" className={classes.form}>
                            <TextField id="outlined-basic" label="Name" variant="outlined" />
                            <TextField id="outlined-basic" label="Email" variant="outlined" />
                            <TextField id="outlined-basic" label="Message" variant="outlined" />
                            <Button className={classes.button} variant="contained" endIcon={<SendIcon />}>
                                Send
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default Index
