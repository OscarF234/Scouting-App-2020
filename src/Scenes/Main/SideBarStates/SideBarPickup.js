import './SideBar.css'

function SideBarPickup({FieldPosition, selected, pickup, shootButton}) {
    return (<>
    
    <button id="pickupBall"
    onClick={function(event){
        FieldPosition.setPosition([...FieldPosition.position, selected.selectedPos])
        console.log(FieldPosition.position)
        pickup.setGround(0)
        shootButton.setShoot(0)
    }}>PICKUP</button>
    
    <button id="dropBall"
    onClick={function(event){
        pickup.setGround(0)
        shootButton.setShoot(0)
    }}>DROP</button>

    <button id="pickupClose"
    onClick={function(event){
        pickup.setGround(0)
        shootButton.setShoot(0)
    }}>CANCEL</button>
    
    </>)
}

export default SideBarPickup;