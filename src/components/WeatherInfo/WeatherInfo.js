import React from 'react';
import {
    Card,
    CardContent,
    Button,
    Grid,
    TextField,
    makeStyles
} from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        margin: 0
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
        color: '#000'
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
        color: '#000'
    }
}));

const WeatherInfo = () => {
    const classes = useStyles();
    return (
        <Card className='weather-card'>
            <CardContent>
                <Grid container>
                    <Grid item xs className='flex-center' style={{paddingBottom: '25px'}}>
                        <h3>Weather</h3>
                    </Grid>
                    <Grid item xs className='flex-center' style={{paddingBottom: '25px'}}>
                        <TextField
                            id="longitude"
                            name="longitude"
                            label="Longitude"
                            type="search"
                            className={classes.textField}
                            margin="normal"
                            autoFocus
                            InputProps={{
                                style: {
                                    caretColor: '#000',
                                    color: '#000'
                                }
                            }}
                            InputLabelProps={{
                                style: {
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    width: '100%',
                                    color: '#000'
                                }
                            }}
                        />
                    </Grid>
                    <Grid item xs className='flex-center' style={{paddingBottom: '25px'}}>
                        <TextField
                            id="latitude"
                            name="latitude"
                            label="Latitude"
                            type="search"
                            className={classes.textField}
                            margin="normal"
                            InputProps={{
                                style: {
                                    caretColor: '#000',
                                    color: '#000'
                                }
                            }}
                            InputLabelProps={{
                                style: {
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    width: '100%',
                                    color: '#000'
                                }
                            }}
                        />
                    </Grid>
                </Grid>


                <Button variant="contained" color="primary">
                    Submit
                </Button>
            </CardContent>
        </Card>
    );
};

export default WeatherInfo;
