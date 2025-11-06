import SideBarWait from './SideBarWait'
import SideBarMatch from './SideBarMatch'
import SideBarEnd from './SideBarEnd'
import SideBarShoot from './SideBarShoot'
import SideBarPickup from './SideBarPickup'
import SideBarWheel from './SideBarWheel'

function RenderSideBar({timerState, setTimerState, ScoutNaming, TeamNaming, shootButton, low, outer, inner, missBall, pickup, FieldPosition, selected, wheelRSettings, wheelPSettings, wheelPageSettings, didHang}) {
    if (timerState == 0) {
        return <SideBarWait
                    setTimerState={setTimerState}
                    ScoutNaming={ScoutNaming}
                    TeamNaming={TeamNaming}
               />
    } else if (timerState == 1) {
        if (pickup.ground == 1) {
            return <SideBarPickup
                FieldPosition={FieldPosition}
                selected={selected}
                pickup={pickup}
                shootButton={shootButton}
            />
        } else if (wheelPageSettings.wheelPage == 1) {
            return <SideBarWheel
                wheelRSettings={wheelRSettings}
                wheelPSettings={wheelPSettings}
                wheelPageSettings={wheelPageSettings}
            />
        } else if (shootButton.shoot == 1) {
            return <SideBarShoot
                shootButton={shootButton}
                low={low}
                outer={outer}
                inner={inner}
                missBall={missBall}
            />
        } else {
            return <SideBarMatch
                ScoutNaming={ScoutNaming}
            />
        }
    } else if (timerState == 2) {
        return <SideBarEnd
            FieldPosition={FieldPosition}
            low={low}
            outer={outer}
            inner={inner}
            missBall={missBall}
            wheelRSettings={wheelRSettings}
            wheelPSettings={wheelPSettings}
            didHang={didHang}
        />
    } else {
        return <p></p>
    }
}

export default RenderSideBar;