# intuit-coding-challenge
REST API with AWS Lambda and S3


## Technologies Used ##
- Node.js version 10.x
- AWS Lambda
- AWS S3
- Amazon API Gateway
- csvtojson module for Node.js

## Requirements ##
- POST `https://5pipxrr2tj.execute-api.us-west-1.amazonaws.com/default/csv/{name}` triggers storeCSV Lambda function
- CSV written to S3 bucket triggers convertCSVtoJSON Lambda function
- GET `https://5pipxrr2tj.execute-api.us-west-1.amazonaws.com/default/csv/{name}` triggers getCSV Lambda function
- GET `https://5pipxrr2tj.execute-api.us-west-1.amazonaws.com/default/json/{name}` triggers getJSON Lambda function
