import FieldImage from './../../Assets/Field.png';
import Point from './../../Assets/Point.png';
import './Field.css'

function Field({ FieldPosition, selected, shootButton, timerState, pickup, wheelPageSettings, didHang, timerSettings }) {
    if (timerSettings.timerState == 2) {
        return (<>
            <img src={FieldImage} style={{
                position: "absolute",
                top: "15vh",
                right: "0",
                width: "80vw",
                height: "70vh"
            }}></img>

            <svg style={{
                position: "absolute",
                top: "15vh",
                right: "0",
                width: "80vw",
                height: "70vh",
                pointerEvents: "none"
            }}>
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7"
                        refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#ff0000" />
                    </marker>
                </defs>
                {FieldPosition.position.map((coord, index) => {
                    if (index < FieldPosition.position.length - 1) {
                        const nextCoord = FieldPosition.position[index + 1];
                        const x1 = coord[1] * 100;
                        const y1 = coord[0] * 100;
                        const x2 = nextCoord[1] * 100;
                        const y2 = nextCoord[0] * 100;

                        return (
                            <g key={index}>
                                <line
                                    x1={x1 + "%"}
                                    y1={y1 + "%"}
                                    x2={x2 + "%"}
                                    y2={y2 + "%"}
                                    stroke="#ff0000"
                                    strokeWidth="3"
                                    markerEnd="url(#arrowhead)"
                                />
                                <circle
                                    cx={x1 + "%"}
                                    cy={y1 + "%"}
                                    r="4"
                                    fill="#ff0000"
                                />
                            </g>
                        );
                    } else {
                        // Draw the last point
                        return (
                            <circle
                                key={index}
                                cx={coord[1] * 100 + "%"}
                                cy={coord[0] * 100 + "%"}
                                r="4"
                                fill="#ff0000"
                            />
                        );
                    }
                })}
            </svg>
        </>)
    } else {
        return (<>
            <img src={FieldImage} style={{
                position: "absolute",
                top: "15vh",
                right: "0",
                width: "80vw",
                height: "70vh"
            }}
                onClick={function (event) {
                    const rect = event.target.getBoundingClientRect();
                    const vw = window.innerWidth
                    const vh = window.innerHeight
                    selected.setSelectedPos([(event.clientX - (0.2 * vw)) / (vw - (0.2 * vw)), (event.clientY - (0.15 * vh)) / (vh - (0.3 * vh))])
                    pickup.setGround(1)
                }}></img>
            <button id="Shoot"
                onClick={function (event) {
                    if (timerState == 1) {
                        shootButton.setShoot(1)
                    } else {
                        shootButton.setShoot(0)
                    }
                }}>SHOOT</button>

            <button id="Spin"
                onClick={function (event) {
                    if (timerState == 1) {
                        wheelPageSettings.setWheelPage(1)
                    } else {
                        wheelPageSettings.setWheelPage(0)
                    }
                }}>SPIN</button>

            <button id="Hang"
                onClick={function (event) {
                    if (timerState == 1) {
                        didHang.setHang("yes")
                    }
                }}>HANG</button>
        </>)
    }
}

export default Field;