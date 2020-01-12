import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';




const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    lineHeight : 50,
    padding : 20
  },
}))(Tooltip);

export default function CustomizedTooltips(props) {
  return (
    <div>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="#fff">{props.team_name}</Typography>
            <Typography color="#fff" >City: {props.city}</Typography>
            <Typography color="#fff" >Conference: {props.conference}</Typography>
            <Typography color="#fff" >Division: {props.division}</Typography>
          </React.Fragment>
        }
        arrow
        placement="right"
      >
        <div>
            {props.children}
        </div>
      </HtmlTooltip>
    </div>
  );
}