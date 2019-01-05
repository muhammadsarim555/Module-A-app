import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MDBIcon, MDBBtn } from "mdbreact";
import './index.css';

const styles = {
  root: {
    flexGrow: 1,
  },
  mailIcon: {
    paddingLeft: '10%',
    marginRight: '.3%',
    cursor: 'pointer',
  },
  mail: {
    display: 'inline',
  },
  bg: {
    backgroundColor: '#424242',
    height: '7%',
  },
  searchBar: {
    backgroundColor: 'black',
    color: 'white',
    border: 'black',
    height: '8%',
  },
  searchIcon: {
    marginLeft: '.4%', 
    cursor: 'pointer'
  },
};

function DenseAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root} >
      <AppBar style={styles.bg}>
        <Toolbar variant="dense">

          <div style={styles.mailIcon}>
            <MDBIcon icon="envelope-o" />
          </div>

          <Typography color="inherit" style={styles.mail}>
            muhammadsarim555@gmail.com
          </Typography>

          <div style={{ marginLeft: '25%' }}>
            <input type="search" className="form-control" placeholder="search" style={styles.searchBar} />
          </div>

          <div style={styles.searchIcon}>
            <MDBIcon icon="search" />
          </div>

          <div style={{ border: 'black', marginLeft: '2%' }} className="account">
            <MDBIcon icon="user" />
            <span  className="account"> Account </span>
          </div>

          <div style={{ marginLeft: '2%' }}>
            <MDBBtn color="deep-orange" >
              <MDBIcon icon="shopping-cart" /> My Cart </MDBBtn>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}

DenseAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DenseAppBar);