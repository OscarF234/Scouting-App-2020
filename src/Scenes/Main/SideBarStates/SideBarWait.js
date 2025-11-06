import './SideBar.css'
import ScoutInput from './../ScoutInput.js'
import TeamInput from '../TeamInput.js';

function SideBarWait({setTimerState, ScoutNaming, TeamNaming}) {

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

        <TeamInput
            TeamNaming={TeamNaming}
        />

    </div>);
}

export default SideBarWait;