import React from 'react'
import AlertDialogSlide from './reusables/dialoug';
import Axios from 'axios';
import { Card, Typography, makeStyles } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';

export default function Stats() {

    const [data , setdata] = React.useState([]);
    const [hTeam , setHteam] = React.useState({});
    const [vTeam , setVteam] = React.useState({});
    const [open, setOpen] = React.useState(false);
    const [ai , setAi] = React.useState({});


    const handleHteam = (e)=>{
        setHteam(e);
    }

    const handleVteam = (e)=>{
        setVteam(e);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAi = (e) =>{
        setAi(e)
    }

    React.useEffect(()=>{
        Axios.get('https://www.balldontlie.io/api/v1/games')
        .then(data=>{
            setdata(data.data.data);
        })
        .catch(err=>{
            alert(err);
        })
    },[])

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
          background : blue,
          width : 200,
          maxWidth : 300,
          height : 120,
          margin : 15,
          padding : 30,
          textAlign : "center",
          display : "flex",
          justifyContent : "space-around",
          alignItems : "center",
          alignContent : "center",
          alignSelf : "center",
          flexDirection : "column"
        },
      });
      const classes = useStyles();

      const toDate = (x)=>{
        let date = new Date(x);
        return date.toUTCString();
      }

    if(data.length!==0){
    return (
        <React.Fragment>
            <AlertDialogSlide open={open} handleClose={handleClose} home_team={hTeam} visitor_team={vTeam} all={ai} />
            <Card  style={{marginTop: 20 , marginBottom : 20}} className={classes.container} >
                {
                    data.map(eachTeam=>{
                        return(
                            <div key={eachTeam.id} style={{cursor : "pointers"}}  className={classes.div}
                                onClick={
                                    ()=>{
                                        handleHteam(eachTeam.home_team);
                                        handleVteam(eachTeam.visitor_team);
                                        handleAi(eachTeam);
                                        handleClickOpen();
                                    }
                                }
                            >
                                    <Typography component="h3" variant="h6">
                                       {
                                          toDate(eachTeam.date).slice(0,16)
                                       }
                                    </Typography> 
                                    <Typography>
                                        {eachTeam.status}
                                    </Typography>
                            </div> 
                        )
                    })
                }
            </Card>
            

        </React.Fragment>
    )
    }
    else{
        return(
             <React.Fragment>
                <Typography variant="h2" component="h5">
                    Loading...
                </Typography>
            </React.Fragment>
        )
    }
}   

