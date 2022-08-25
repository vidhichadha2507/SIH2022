const authenticate = (number, userType, appState, setAppState) => {
    // temp for testing
    if (number === "123" && userType === 1) {
        setAppState({
            ...appState,
            "firstName": "Divyam",
            "lastName": "Chadha",
        })
        console.log(appState)
        return true;
    }
        
    else
        return false;
};

export default authenticate;