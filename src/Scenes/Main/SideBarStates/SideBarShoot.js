import './SideBar.css'

function SideBarShoot({shootButton, low, outer, inner, missBall}) {
    return (<>
        <button id="closeShoot"
        onClick={function(event){
            shootButton.setShoot(0)
        }}>CLOSE</button>

        <button id="shootLow"
        onClick={function(event){
            low.setScoredLow(low.scoredLow + 1)
        }}>LOW</button>

        <button id="shootOuter"
        onClick={function(event){
            outer.setScoredOuter(outer.scoredOuter + 1)
        }}>OUTER</button>

        <button id="missShoot"
        onClick={function(event){
            missBall.setMiss(missBall.miss + 1)
        }}>MISS</button>

        <button id="shootInner"
        onClick={function(event){
            inner.setScoredInner(inner.scoredInner + 1)
        }}>INNER</button>
    </>)
}

export default SideBarShoot;