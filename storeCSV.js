const aws = require('aws-sdk');
const s3 = new aws.S3();

exports.handler = async (event, context) => {
    var params = {
        Bucket: 'jeremiah-intuit',
        Key: "csv/" + event.pathParameters.name, 
        Body: event.body,
        ContenType: "text/plain"
    };
    try {
        var promise =  await s3.upload(params).promise();
        var response = {
            statusCode: 200,
            body: JSON.stringify('CSV uploaded')
        };
        return response;
    } catch (err) {
        console.log(err);
        throw new Error("Internal server error");
    }
};
