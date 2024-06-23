// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleDuplicateError = (err: any) => {
    // double quotes using regex
    const match = err.message.match(/"([^"]*)"/);
    const property = match && match[1];
    const errorMessage = `${property} is already exist`
    return {
        statusCode: 400,
        message: "Invalid ID",
        errorMessage
    }

}

export default handleDuplicateError;