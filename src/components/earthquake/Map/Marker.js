import React from 'react';
import { CircleMarker, Popup  } from 'react-leaflet';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ScheduleIcon from '@material-ui/icons/Schedule';
import KeyboardTabIcon from '@material-ui/icons/KeyboardTab';

const useStyles = makeStyles({
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    card: {
        boxShadow: 'none !important',
    },
    cardHeader: {
        padding: 0,
    },
    CardContent: {
        padding: 0,
        width: 250
    },
    h3: {
        marginBottom: 0,
    },
    gridAlign: {
        textAlign: 'center',
    },
    pAlign: {
        display: 'flex',
        verticalAlign: 'middle',
        alignItems: 'center',
    },
  });

function Marker({quake, index}) {
    const classes = useStyles();
    let color = "";

    if(quake.mag < 2){color = "green";} 
    else if (quake.mag > 4) {color = "red";} 
    else {color = "blue";}

    let placeArray = quake.place.split(",")
    let placeArraySplit  = placeArray[0].split("of");
    let countryName = placeArray[placeArray.length -1].trim();

    return (
        <CircleMarker key={index} center={[quake.coordinates[1], quake.coordinates[0]]} color={color} radius={quake.mag*2}>
            <Popup>
                <Card className={classes.card}>
                    <CardContent className={classes.CardContent}>
                        <Grid container spacing={3}>
                            <Grid item xs={8}>
                                <CardHeader title={countryName} subheader={placeArraySplit[1]} className={classes.cardHeader} />
                            </Grid>
                            <Grid item xs={4} className={classes.gridAlign}>
                                <h3 className={classes.h3}>{quake.mag}</h3>
                                <small>Richter Scale</small>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body2" component="span" className={classes.pAlign}>
                                    <LocationOnIcon /><p>Location</p>
                                </Typography>
                                <Typography variant="body2" component="small">
                                    {quake.coordinates[1]}, {quake.coordinates[0]}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body2" component="span" className={classes.pAlign}>
                                    <KeyboardTabIcon /><p>Distance</p>
                                </Typography>
                                <Typography variant="body2" component="small">
                                    {placeArraySplit[0]}
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant="body2" component="span" className={classes.pAlign}>
                                    <ScheduleIcon /><p>Time</p>
                                </Typography>
                                <Typography variant="body2" component="small">
                                    {quake.time}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Popup>
        </CircleMarker>
    )
}

export default Marker
