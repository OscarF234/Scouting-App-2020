import './SideBar.css'

function SideBarMain({teamScouting, ScoutName, TeamName}) {

    return(<div>
        <p style={{
            position: "absolute",
            top: "25%",
            left: "5%",
            fontSize: "5vh",
            width: "30vh"
        }}>Scouting: {teamScouting}</p>

        <p style={{
            position: "absolute",
            top: "55%",
            left: "5%",
            fontSize: "5vh",
            width: "30vh"
        }}>Scout: {ScoutName}</p>

        <p style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            fontSize: "5vh",
            width: "30vh"
        }}>Team: {TeamName}</p>
    </div>)
}

export default SideBarMain;