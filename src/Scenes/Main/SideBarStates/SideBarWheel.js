function SideBarWheel({wheelRSettings, wheelPSettings, wheelPageSettings}) {
    return (<>
        <button id="positionSpin"
        onClick={function(event){
            wheelPSettings.setWheelP(wheelPSettings.wheelP + 1)
            wheelPageSettings.setWheelPage(0)
        }}>POSITION</button>

        <button id="rotationSpin"
        onClick={function(event){
            wheelRSettings.setWheelR(wheelRSettings.wheelR + 1)
            wheelPageSettings.setWheelPage(0)
        }}>ROTATION</button>

        <button id="wheelClose"
        onClick={function(event){
            wheelPageSettings.setWheelPage(0)
        }}>CLOSE</button>
    </>)
}

export default SideBarWheel;