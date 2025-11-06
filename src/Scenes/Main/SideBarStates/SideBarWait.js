import './SideBar.css'
import ScoutInput from './../ScoutInput.js'

function SideBarWait({setTimerState, ScoutNaming}) {

    return (<div>

        <button id="StartMatch"
        onClick={function(event){
            setTimerState(function(){
                return 1;
            })
        }}>START MATCH</button>

        <ScoutInput
            ScoutNaming={ScoutNaming}
        />

    </div>);
}

export default SideBarWait;