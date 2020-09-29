import React, { useState } from 'react';
import image from './images/weatheroptions.png';

import Conditions from '../Conditions/Conditions';
import { Button, TextField, Checkbox, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingBlock: '26ch',
  },
  paper: {
    padding: theme.spacing(),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '50ch',
    borderRadius: '22px',
  },
}));
const Forecast = () => {
  let [responseObj, setResponseObj] = useState({});
  let [city, setCity] = useState('');
  let [unit, setUnit] = useState('metric');
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);

  const classes = useStyles();

  function getForecast(e) {
    e.preventDefault();

    if (city.length === 0) {
      return setError(true);
    }

    // Clearing the useState to prepare for new data.

    setError(false);
    setResponseObj({});

    setLoading(true);

    const uriEncodedCity = encodeURIComponent(city);
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
      .then(response => {
        if (response.cod !== 200) {
          throw new Error();
        }

        setResponseObj(response);
        setLoading(false);
      })
      .catch(err => {
        setError(true);
        setLoading(false);
        console.log(err.message);
      });
  }
  return (
    <div>
      <center>
        <h1 style={{ fontFamily: '-moz-initial' }}>
          Simply <i>Weather</i>
        </h1>
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
              <TextField
                id="filled-basic"
                label="Location"
                variant="filled"
                color="primary"
                maxLength="50"
                value={city}
                onChange={e => setCity(e.target.value)}
              />
            </Grid>
            <Checkbox
              size="small"
              color="primary"
              name="units"
              checked={unit === 'metric'}
              value="metric"
              onChange={e => setUnit(e.target.value)}
            />
            Celsius
            <Checkbox
              color="primary"
              name="units"
              size="small"
              checked={unit === 'imperial'}
              value="imperial"
              onChange={e => setUnit(e.target.value)}
            />
            Fahrenheit
            <div>
              <Button onClick={getForecast} variant="contained" color="primary">
                Get Forecast
              </Button>
            </div>
            <br />
          </form>{' '}
        </Grid>
        <Grid>
          <Conditions
            responseObj={responseObj}
            error={error}
            loading={loading}
          />
        </Grid>
        <br />
      </center>
    </div>
  );
};

export default Forecast;
