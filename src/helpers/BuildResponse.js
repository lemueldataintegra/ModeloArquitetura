function BuildResponse(object, message, status, success) {
    var response = {
        Message: message,
        Status: status,
        Success: success
    }
    if (status === 500)
        response = {
            Error: object,
            ...response
        }
    else
        response = {
            Data: object,
            ...response
        }
    return response;
}

module.exports = BuildResponse