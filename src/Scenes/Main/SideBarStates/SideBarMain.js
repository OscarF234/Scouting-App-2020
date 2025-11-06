import './SideBar.css'

function SideBarMain({teamScouting, ScoutName}) {

    return(<div>
        <p style={{
            position: "absolute",
            top: "25%",
            left: "5%",
            fontSize: "5vh",
            width: "15vw"
        }}>Scouting: {teamScouting}</p>

        <p style={{
            position: "absolute",
            top: "55%",
            left: "5%",
            fontSize: "5vh",
            width: "15vw"
        }}>Scout: {ScoutName}</p>

        <button id="BackToMenu"
        onClick={function(event){
            console.log("gobacktomainscreen");
        }}>MENU</button>
    </div>)
}

export default SideBarMain;