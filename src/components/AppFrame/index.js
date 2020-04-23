import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const AppFrame = (props) => {
  const classes = props.classes;
  const t = props.t;

  return (
    <div className={classes.container}>
      <div className={classes.topBar}>{ t('TopBar') }</div>
      <div className={classes.main}>
        <div className={classes.leftPanel}>
        </div>
        <div className={classes.rightPanel}>{ t('RightPanel') }</div>
      </div>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(AppFrame);
