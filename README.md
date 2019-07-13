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

## Design Choices ##
- I used Amazon API Gateway as it allowed me to easily create a set of an endpoints that trigger the Lambda functions through AWS integration.
- I found a module to convert the data from CSV to JSON. I could have written some code to do it from scratch, but I generally try to avoid reinventing the wheel. An existing module that has been improved upon and added to over time is likely to be much more robust and flexible than some quick code I write up on the spot. It may be better to do it yourself when you have a need for a specific implementation, but this case was fairly straightfoward and simple.
- For the purposes of this challenge, I generally just tried to keep things simple to meet the requirements. However, in a production environment, I would probably not assume that requests would always come in the correct form, so I would add some validation/sanitization code to my Lambda functions. Another potential concern would be overwriting a file with the same name in the S3 bucket.
