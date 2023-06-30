function lambdaWrapper(method, path, body) {
    return JSON.stringify(body);
}

export default lambdaWrapper;