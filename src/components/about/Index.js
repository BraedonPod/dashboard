import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from "@material-ui/core/Divider";


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
    },
    typography: {
        marginBottom: 13,
    },
  });

function Index() {
    const classes = useStyles();

    return (
        <>
            <div className="container">
                <Card className={classes.root}>
                    <CardHeader title="About"  subheader="Earthquakes / Covid / And many more!" />
                    <Divider />
                    <CardContent>
                        <Typography variant="body2" component="p" className={classes.typography}>
                            Why did I make this site you might ask?
                        </Typography>
                        <Typography variant="body2" component="p" className={classes.typography}>
                            Cause I was bored!
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default Index
