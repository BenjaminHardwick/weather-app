import { Paper } from '@material-ui/core';
import React from 'react';
import clouds from './images/clouds.jpg';
import clear from './images/clear.jpg';
import rain from './images/rain.jpg';
import snow from './images/snow.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBlock: '26ch',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '100%',
    height:"100%",
    borderRadius: '22px',
  },
}));

const Conditions = (props) => {
  const classes = useStyle();
  if (props.responseObj.cod !== 200) {
    return (
      <div>
        <Paper
          className={classes.paper}
          style={{
            backgroundImage: `url(${clouds})`,
            fontSize: 'calc(10px + 0.75vw)',
          }}
        >
          <p>
            <strong>Enter a valid Location</strong>
          </p>

          <h1>It could be a city</h1>
          <h2>or your home country</h2>
          <small>or maybe a village</small>
          <small> or even a hamlet </small>
          <small>maybe a planet?</small>

        </Paper>
      </div>
    );
  } else if (props.responseObj.cod === 200) {
    if (props.responseObj.weather[0].main === 'Clouds') {
      return (
        <div>
          <Paper
            className={classes.paper}
            style={{
              backgroundImage: `url(${clouds})`,
              fontSize: 'calc(10px + 0.75vw)',
            }}
          >
            <p>
              <strong>{props.responseObj.name}</strong>
            </p>

            <h1>{Math.round(props.responseObj.main.temp)}°</h1>
            <h2> with {props.responseObj.weather[0].description}</h2>
          </Paper>
        </div>
      );
    } else if (props.responseObj.weather[0].main === 'Rain') {
      return (
        <div>
          <Paper
            className={classes.paper}
            style={{ backgroundImage: `url(${rain})` }}
          >
            <p>
              <strong>{props.responseObj.name}</strong>
            </p>
            <h1>{Math.round(props.responseObj.main.temp)}°</h1>
            <h2> with {props.responseObj.weather[0].description}</h2>
          </Paper>
        </div>
      );
    } else if (props.responseObj.weather[0].main === 'Snow') {
      return (
        <div>
          {' '}
          <Paper
            className={classes.paper}
            style={{ backgroundImage: `url(${snow})` }}
          >
            <p>
              <strong>{props.responseObj.name}</strong>
            </p>
            <h1>{Math.round(props.responseObj.main.temp)}°</h1>
            <h2> with {props.responseObj.weather[0].description}</h2>
          </Paper>
        </div>
      );
    } else if (props.responseObj.weather[0].main === 'Clear') {
      return (
        <div>
          <Paper
            className={classes.paper}
            style={{ backgroundImage: `url(${clear})` }}
          >
            <p>
              <strong>{props.responseObj.name}</strong>
            </p>
            <h1>{Math.round(props.responseObj.main.temp)}°</h1>
            <h2> with {props.responseObj.weather[0].description}</h2>
          </Paper>
        </div>
      );
    }
  }
};

export default Conditions;
