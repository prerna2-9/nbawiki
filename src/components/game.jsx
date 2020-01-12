import React from 'react'
import Axios from 'axios';
import { Card, Typography, makeStyles } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import CustomizedTooltips from './reusables/tooltip';

const useStyles = makeStyles({
    container:{
        maxWidth : 900,
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
      width : 100,
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

export default function Game() {
    const classes = useStyles();
    const [data , setData] = React.useState([]);

    React.useEffect(()=>{
       Axios.get('https://www.balldontlie.io/api/v1/teams')
       .then(data=>{
           setData(data.data.data);
       })
       .catch(err=>{
           alert(err);
       })
    },[])

    if(data.length !== 0){
     
    return ( 
        <React.Fragment>
            <Card  style={{marginTop: 20 , marginBottom : 20}} className={classes.container} >
                {
                    data.map(eachTeam=>{
                        return(
                            <div key={eachTeam.id} style={{cursor : "pointers"}}  className={classes.div}>
                                <CustomizedTooltips 
                                team_name={eachTeam.full_name} 
                                city={eachTeam.city}
                                division={eachTeam.division}
                                conference={eachTeam.conference}
                                >
                                    <Typography component="h3" variant="h6">
                                        {eachTeam.name}
                                    </Typography> 
                                    <Typography>
                                        {eachTeam.city}
                                    </Typography>
                                </CustomizedTooltips>
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
            <h1>
                Loading ...
            </h1>
        )
    }
}
