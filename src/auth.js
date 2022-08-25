const authenticate = (number, userType) => {
    // temp for testing
    if (number === "123" && userType === 1)
        return true;
    else
        return false;
};

export default authenticate;