import { NavLink,Outlet } from "react-router-dom"
export function HomeLayout() {

    return(
        <div style={{
            backgroundColor: "rgb(2,13,31)",
           alignSelf: "flex-end",
        }}>
           <NavLink className="nav" to="/">Home</NavLink>
           <NavLink className="nav" to="services">Services</NavLink>
           <NavLink className="nav" to="resume">Resume</NavLink>
           <NavLink className="nav" to="project">Projects</NavLink>
           <NavLink className="nav" to="Contact">Contact</NavLink>
           <div style={{
            marginTop: "50px",
            marginLeft:"100px"
           }}>

           <Outlet />
           </div>
         
        </div>
    )
}