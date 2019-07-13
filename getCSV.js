const aws = require('aws-sdk');
const s3 = new aws.S3();

exports.handler = async (event, context) => {
    var params = {
        Bucket: 'jeremiah-intuit',
        Key: "csv/" + event.pathParameters.name
    };
    try {
        var csv = await s3.getObject(params).promise();
        var body = csv.Body.toString();
        var response = {
            statusCode: 200,
            body: body
        };
        return response;
    } catch (err) {
        console.log(err);
        throw new Error("Internal server error");
    }
};
