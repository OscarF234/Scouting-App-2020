function SideBarEnd({FieldPosition, low, outer, inner, missBall, wheelRSettings, wheelPSettings, didHang}) {

    return (<>
    <p style={{
        position: "absolute",
        top: "0",
        left: "5%",
        fontSize: "4vh"
    }}>Scored Low: {low.scoredLow}</p>
    <p style={{
        position: "absolute",
        top: "12%",
        left: "5%",
        fontSize: "4vh"
    }}>Scored Outer: {outer.scoredOuter}</p>
    <p style={{
        position: "absolute",
        top: "24%",
        left: "5%",
        fontSize: "4vh"
    }}>Scored Inner: {inner.scoredInner}</p>
    <p style={{
        position: "absolute",
        top: "36%",
        left: "5%",
        fontSize: "4vh"
    }}>Missed: {missBall.miss}</p>
    <p style={{
        position: "absolute",
        top: "48%",
        left: "5%",
        fontSize: "4vh"
    }}>Rotated: {wheelRSettings.wheelR}</p>
    <p style={{
        position: "absolute",
        top: "60%",
        left: "5%",
        fontSize: "4vh"
    }}>Rotated: {wheelPSettings.wheelP}</p>
    <p style={{
        position: "absolute",
        top: "72%",
        left: "5%",
        fontSize: "4vh"
    }}>Hang: {didHang.hang}</p>
    
    </>)
}

export default SideBarEnd;