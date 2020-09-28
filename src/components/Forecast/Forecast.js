import React, { useState } from 'react';
import image from './images/weatheroptions.png';

import cityImage from './images/city.jpg';
import Conditions from '../Conditions/Conditions';
import { Button, TextField, Checkbox, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingBlock: '26ch',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '50ch',
    borderRadius: '22px',
  },
}));
const Forecast = () => {
  let [responseObj, setResponseObj] = useState({});
  let [city, setCity] = useState('');
  let [unit, setUnit] = useState('imperial');
  const uriEncodedCity = encodeURIComponent(city);
  const classes = useStyles();
  function getForecast(e) {
    e.preventDefault();
    fetch(
      `https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
          'x-rapidapi-key':
            'd98be5dbacmsh1cb72dd9775de72p1855f5jsnb3eb99d12f7d',
          q: '',
        },
      }
    )
      .then(response => response.json())
      .then(response => {
        setResponseObj(response);
      })

      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <div>
      <center>
        <Grid container spacing={3}>
          <Grid className={classes.root} item xs={12}>
            {' '}
            <Paper
              className={classes.paper}
              style={{ backgroundImage: `url(${image})` }}
            >
              <h2>Find Current Weather Conditions</h2>
            </Paper>
          </Grid>
          <form className={classes.root} onSubmit={getForecast}>
            <Grid item xs={12}>
              <Paper
                className={classes.paper}
                style={{ backgroundImage: `url(${cityImage})` }}
              >
                <TextField
                  style={{ backgroundColor: 'white', borderRadius: '2px' }}
                  helperText="Enter a city or location."
                  id="outlined-basic"
                  label="Location"
                  variant="outlined"
                  color="primary"
                  maxLength="50"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                />{' '}
              </Paper>
            </Grid>
            <label>
              <Checkbox
                type="radio"
                name="units"
                checked={unit === 'metric'}
                value="metric"
                onChange={e => setUnit(e.target.value)}
              />
              Celcius
            </label>
            <label>
              <Checkbox
                type="radio"
                name="units"
                checked={unit === 'imperial'}
                value="imperial"
                onChange={e => setUnit(e.target.value)}
              />
              Fahrenheit
            </label>
            <div>
              <Button onClick={getForecast} variant="contained" color="primary">
                Get Forecast
              </Button>
            </div>
          </form>{' '}
        </Grid>
        <Grid>
          <br />
          <Conditions responseObj={responseObj} />
        </Grid>
        <br />
      </center>
    </div>
  );
};

export default Forecast;
