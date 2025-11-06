import './Main.css'

function BottomBar({timerSettings, setScouting}) {
    if (timerSettings.timerState == 0) {
        return (<>
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
        </>)
    }
}

export default BottomBar;