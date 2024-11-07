import { Outlet ,NavLink} from "react-router-dom"
export function ResumeLayout() {
    return(
        <div className="Resume">
            <div className="ResumeMenu">
                <h1>Inofmation</h1>
                <NavLink className="nav2" to="education">Education</NavLink>
                <NavLink className="nav2"  to="experience">Experience</NavLink>
                <NavLink className="nav2"  to="skills">Skills</NavLink>
                <NavLink className="nav2"  to="about">About</NavLink>
            </div>
          
          <div className="ResumeOut">
          <Outlet/>
          </div>
        
        </div>
    )
}