import { useState } from 'react';
import './Main.css'
import SideBarMain from './SideBarStates/SideBarMain.js'
import Timer from './Timer.js'
import RenderSideBar from './SideBarStates/SideBarController.js'
import Field from './Field.js'

function MainScene({wrapper}) {

    const [teamScouting, setScouting] = useState("N/A");
    const [timerState, setTimerState] = useState(0);
    const [ScoutName, SetScoutName] = useState("");
    const [position, setPosition] = useState([]);
    const [selectedPos, setSelectedPos] = useState(0);
    const [shoot, setShoot] = useState(0);
    const [scoredLow, setScoredLow] = useState(0);
    const [scoredOuter, setScoredOuter] = useState(0);
    const [scoredInner, setScoredInner] = useState(0);
    const [miss, setMiss] = useState(0);
    const [ground, setGround] = useState(0);
    const [wheelR, setWheelR] = useState(0);
    const [wheelP, setWheelP] = useState(0);
    const [wheelPage, setWheelPage] = useState(0);
    const [hang, setHang] = useState("no");

    const timerSettings = {timerState, setTimerState}
    const ScoutNaming = {ScoutName, SetScoutName}
    const FieldPosition = {position, setPosition}
    const selected = {selectedPos, setSelectedPos}
    const shootButton = {shoot, setShoot}
    const low = {scoredLow, setScoredLow}
    const outer = {scoredOuter, setScoredOuter}
    const inner = {scoredInner, setScoredInner}
    const missBall = {miss, setMiss}
    const pickup = {ground, setGround}
    const wheelPSettings = {wheelP, setWheelP}
    const wheelRSettings = {wheelR, setWheelR}
    const wheelPageSettings = {wheelPage, setWheelPage}
    const didHang = {hang, setHang}
    
    return (<>
    <div style={{
        position: "absolute",
        top: "0",
        right: "0",
        width: "80vw",
        height: "70vh"
    }}>
        <Field
            FieldPosition={FieldPosition}
            selected={selected}
            shootButton={shootButton}
            timerState={timerState}
            pickup={pickup}
            wheelPageSettings={wheelPageSettings}
            didHang={didHang}
            timerSettings={timerSettings}
        />
    </div>
    
    <div style={{
        position: "absolute",
        top: "0",
        left: "0",
        height: "50vh",
        width: "20vw",
        backgroundColor: "#C9C9C9"
    }}>
        <SideBarMain
            teamScouting={teamScouting}
            wrapper={wrapper}
            ScoutName={ScoutName}
        />
    </div>

    <div style={{
        position: "absolute",
        top: "50vh",
        left: "0",
        height: "50vh",
        width: "20vw",
        backgroundColor: "#bdbdbd"
    }}>
        <RenderSideBar
            timerState={timerState}
            setTimerState={setTimerState}
            ScoutNaming={ScoutNaming}
            shootButton={shootButton}
            low={low}
            outer={outer}
            inner={inner}
            missBall={missBall}
            pickup={pickup}
            FieldPosition={FieldPosition}
            selected={selected}
            wheelRSettings={wheelRSettings}
            wheelPSettings={wheelPSettings}
            wheelPageSettings={wheelPageSettings}
            didHang={didHang}
        />
    </div>

    <div style={{
        position: "absolute",
        top: "0",
        right: "0",
        height: "15vh",
        width: "80vw",
        backgroundColor: "#686868ff"
    }}>
        <Timer
            timerSettings={timerSettings}
        />
        <p>{scoredLow}</p>
        <p>{scoredOuter}</p>
        <p>{scoredInner}</p>
    </div>

    <div style={{
        position: "absolute",
        bottom: "0",
        right: "0",
        width: "80vw",
        height: "15vh",
        background: "linear-gradient(90deg,rgba(0, 47, 166, 1) 50%, rgba(196, 0, 0, 1) 50%)"
    }}>
        <button className="bottomButton blue"
        style={{
            left: "5%"
        }}
        onClick={function(event){
            setScouting(function(){
                return "Blue 1"
            });
        }}>Blue 1</button>

        <button className="bottomButton blue"
        style={{
            left: "20%"
        }}        
        onClick={function(event){
            setScouting(function(){
                return "Blue 2"
            });
        }}>Blue 2</button>

        <button className="bottomButton blue"
        style={{
            left: "35%",
        }}
        onClick={function(event){
            setScouting(function(){
                return "Blue 3"
            });
        }}>Blue 3</button>

        <button className="bottomButton red"
        style={{
            right: "5%",
        }}
        onClick={function(event){
            setScouting(function(){
                return "Red 1"
            });
        }}>Red 1</button>

        <button className="bottomButton red"
        style={{
            right:"20%"
        }}
        onClick={function(event){
            setScouting(function(){
                return "Red 2"
            });
        }}>Red 2</button>

        <button className="bottomButton red"
        style={{
            right:"35%"
        }}
        onClick={function(event){
            setScouting(function(){
                return "Red 3"
            });
        }}>Red 3</button>
    </div>
    </>)
}

export default MainScene;