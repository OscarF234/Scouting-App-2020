function TeamInput({TeamNaming}) {

    const handleTeamName = (event) => {
        TeamNaming.SetTeamName(event.target.value);
    };

    return (<>
    <p style={{
        position: "absolute",
        top: "50%",
        left: "5%"
    }}>Team Number:</p>
    <label htmlFor="text-input"></label>
    <input
    type="text"
    value={TeamNaming.TeamName}
    onChange={handleTeamName}
    placeholder="Team Number..."
    style={{
        position: "absolute",
        top: "60%",
        left: "5%",
        width: "87.5%",
        height: "5%",
    }}>
    </input>
    </>)
}

export default TeamInput;