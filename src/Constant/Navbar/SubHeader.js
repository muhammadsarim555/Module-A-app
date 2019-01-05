import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
        borderBottom: '1px solid darkgray',
    },
    bg: {
        backgroundColor: 'rgb(27, 23, 23)',
        marginTop: '3.3%',
        height: '15%',
        paddingRight: '12%',
        paddingLeft: '10%',
    },
};

function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar style={styles.bg}>
                <Toolbar >
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Logo
          </Typography>
                </Toolbar>
            </AppBar>



        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);