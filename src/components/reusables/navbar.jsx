import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const [c1 , setC1] = React.useState("selected");
    const [c2 , setC2] = React.useState("hulu");
    return (
        
        <React.Fragment>
            <div className="nv">
                <div className="navbar">
                <Link to="/"
                                style ={{textDecoration : "none",
                                color: "black"
                                
                                }}  
                            className={c1}
                            onClick={()=>{
                                setC2("hulu")
                                setC1("selected");
                            }}
                >
                    <div className={'paper ' + c1}>
                           
                                NBA Teams
                            
                    </div>
                </Link>
                <Link to="/stats" 
                            
                            style={{
                                textDecoration : "none",
                                color: "black"
                            }}
                            className={c2}
                            onClick={()=>{
                                setC2("selected")
                                setC1("hulu")
                            }}
                >
                    <div className={"paper " + c2}>
                                NBA Games
                    </div>
                </Link>
                </div>
            </div>
        </React.Fragment>
    )
}
