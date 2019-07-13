const aws = require('aws-sdk');
const s3 = new aws.S3();
const csvToJson = require('csvtojson');

exports.handler = async (event, context) => {
    var bucket = event.Records[0].s3.bucket.name;
    var key = event.Records[0].s3.object.key;
    var csvParams = {
        Bucket: bucket,
        Key: key
    };
    try {
        var csv = await s3.getObject(csvParams).promise();
        var body = csv.Body.toString();
        var json = await csvToJson().fromString(body);
        
        var jsonParams = {
            Bucket: bucket,
            Key: key.replace("csv/", "json/"),
            Body: JSON.stringify(json),
            ContentType: "application/json"
        };
        var uploadPromise = await s3.upload(jsonParams).promise();
        var response = {
            statusCode: 200,
            body: JSON.stringify('CSV converted to JSON')
        };
        return response;
    } catch (err) {
        console.log(err);
        throw new Error("Internal server error");
    }
};
