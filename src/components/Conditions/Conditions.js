import { Paper } from '@material-ui/core';
import React from 'react';
import clouds from './images/clouds.jpg';
import clear from './images/clear.jpg';
import rain from './images/rain.jpg';
import snow from './images/snow.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingBlock: '26ch',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '70ch',
    borderRadius: '22px',
  },
}));
const Conditions = props => {
  const classes = useStyle();
  return (
    <div>
      {props.responseObj.cod === 200 ? (
        <div>
          {props.responseObj.weather[0].main === 'Clouds' ? (
            <Paper
              className={classes.paper}
              style={{ backgroundImage: `url(${clouds})`,  fontSize: 'calc(10px + 0.75vw)',  }}
            >
              <p>
                <strong>{props.responseObj.name}</strong>
              </p>
              <p>
                <h1>{Math.round(props.responseObj.main.temp)}°</h1>
                with {props.responseObj.weather[0].description}
              </p>
            </Paper>
          ) : null}
          {props.responseObj.weather[0].main === 'Rain' ? (
            <Paper
              className={classes.paper}
              style={{ backgroundImage: `url(${rain})`, }}
            >
              <p>
                <strong>{props.responseObj.name}</strong>
              </p>
              <p>
                <h1>{Math.round(props.responseObj.main.temp)}°</h1>
                <h2>with {props.responseObj.weather[0].description}</h2>
              </p>
            </Paper>
          ) : null}
          {props.responseObj.weather[0].main === 'Snow' ? (
            <Paper
              className={classes.paper}
              style={{ backgroundImage: `url(${snow})`,}}
            >
              <p>
                <strong>{props.responseObj.name}</strong>
              </p>
              <p>
                <h1>{Math.round(props.responseObj.main.temp)}°</h1>
                <h2>{props.responseObj.weather[0].description}</h2>
              </p>
            </Paper>
          ) : null}
          {props.responseObj.weather[0].main === 'Clear' ? (
            <Paper
              className={classes.paper}
              style={{ backgroundImage: `url(${clear})`, }}
            >
              <p>
                <strong>{props.responseObj.name}</strong>
              </p>
              <p>
                <h1>{Math.round(props.responseObj.main.temp)}°</h1>
                with {props.responseObj.weather[0].description}
              </p>
            </Paper>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default Conditions;
