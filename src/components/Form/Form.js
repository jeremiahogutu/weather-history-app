import React from 'react';
import {
    Card,
    CardContent,
    Button,
    Grid,
    TextField,
    makeStyles
} from '@material-ui/core'
import './Form.css'

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
        color: '#818181'
    }
}));

const Form = props => {
    const classes = useStyles();
    return (
        <Card className='weather-card'>
            <CardContent>
                <form className='flex-center' onSubmit={props.getWeather}>
                    <Grid container>
                        <Grid item xs={12}>
                            <h3 className='flex-center'>Weather</h3>
                        </Grid>
                        <Grid item xs={6} style={{paddingBottom: '25px'}}>
                            <TextField
                                id="latitude"
                                name="latitude"
                                label="Latitude"
                                type="search"
                                className={classes.textField}
                                margin="normal"
                                autoFocus
                                InputProps={{
                                    style: {
                                        caretColor: '#818181',
                                        color: '#818181'
                                    }
                                }}
                                InputLabelProps={{
                                    style: {
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        width: '100%',
                                        color: '#818181'
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} style={{paddingBottom: '25px'}}>
                            <TextField
                                id="longitude"
                                name="longitude"
                                label="Longitude"
                                type="search"
                                className={classes.textField}
                                margin="normal"
                                InputProps={{
                                    style: {
                                        caretColor: '#818181',
                                        color: '#818181'
                                    }
                                }}
                                InputLabelProps={{
                                    style: {
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        width: '100%',
                                        color: '#818181'
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} className='flex-center' style={{paddingBottom: '25px', margin: '0 auto'}}>
                            <Button type="submit" variant="contained" color="primary">
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    );
};

export default Form;
