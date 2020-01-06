async function sharedFunction(event, context) {
	return {
		statusCode: 200,
		body: JSON.stringify('Hello world from shared function')
	};
}

exports.handler = async (event, context) => {
	return await sharedFunction(event, context);
};
