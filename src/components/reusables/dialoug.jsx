import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Slide from '@material-ui/core/Slide';
import { Typography , makeStyles} from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const useStyles = makeStyles({
  container:{
      maxWidth : 1200,
      margin : "auto",
      height : "auto",
      display : "flex",
      justifyContent : "space-between",
      alignItems : "left",
      alignContent : "center",
      alignSelf : "center",
      flexDirection : "row",
      flexWrap : "wrap"
  },
  div: {
    width : 200,
    maxWidth : 300,
    height : 120,
    margin : 20,
    padding : 30,
    textAlign : "center",
    display : "flex",
    justifyContent : "space-around",
    alignItems : "center",
    alignContent : "center",
    alignSelf : "center",
    flexDirection : "column",
  },
});


export default function AlertDialogSlide(props) {
  
  const classes = useStyles();

  const toDate = (e)=>{
    let date = new Date(e).toUTCString();
    // console.log(e.getHours());
  console.log(new Date(e).toLocaleTimeString())
    return date.toString();
  }

  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        
          <Typography component="h1" variant="h3" style={{textAlign : "center",color : "#e6891d" , marginTop : 15 , marginBottom: 15}}> 
            Game Description
          </Typography>

          <Typography style={{color : "#000" , textAlign : "center"}}>
            {
              toDate(props.all.date).slice(0,16)
            }
            
          </Typography>
        <div className={classes.container} style={{marginTop : 50}}>
           <div className={classes.div}>
             <Typography variant="h4" component="h1">
               Home Team
             </Typography>
             <br/>
             <Typography>
               {props.home_team.full_name}({props.home_team.abbreviation})
             </Typography>
             <br/>
             <Typography>
               <b>City:</b> {props.home_team.city}
             </Typography>
             <br/>
             <Typography>
               <b>Conference:</b> {props.home_team.conference}
             </Typography>
             <br/>
              <Typography>
                <b>Division:</b> {props.home_team.division}
              </Typography>
              <br/>
              <Typography>
                <b>Home Team Score:</b> {props.all.home_team_score}
              </Typography>
           </div>

           <div className={classes.div}>
           <Typography variant="h4" component="h1">
               Visitor Team
             </Typography>
             <br/>
             <Typography>
               {props.visitor_team.full_name}({props.visitor_team.abbreviation})
             </Typography>
             <br/>
             <Typography>
               <b>City:</b> {props.visitor_team.city}
             </Typography>
             <br/>
             <Typography>
               <b>Conference:</b> {props.visitor_team.conference}
             </Typography>
             <br/>
              <Typography>
                <b>Division:</b> {props.visitor_team.division}
              </Typography>
              <br/>
              <Typography>
                <b>Visitor Team Score:</b> {props.all.visitor_team_score}
              </Typography>
           </div>
        </div>
          
        <DialogActions style={{margin : "auto" , marginTop : 50}}>
          <Button variant="contained" style={{background : "green" , color : "white"}} onClick={props.handleClose} >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}