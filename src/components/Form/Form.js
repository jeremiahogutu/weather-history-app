import React from 'react';
import {
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

        <form id='userInput' className='flex-center' onSubmit={props.getWeather}>
            <Grid container>
                <Grid item xs={12}>
                    <h2 className='flex-center main-text'>Weather History</h2>
                </Grid>
                <Grid className='flex-center' item xs={6} style={{paddingBottom: '25px'}}>
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
                <Grid className='flex-center' item xs={6} style={{paddingBottom: '25px'}}>
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
                <Grid item xs={12} className='flex-center'>
                    <Button type="submit" variant="contained" style={{backgroundColor: '#3D5A6C', color: '#fff'}}>
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default Form;
