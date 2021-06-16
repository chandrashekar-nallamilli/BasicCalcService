# Welcome to Basic Caluclator Service!

This is a project hosted on AWS. The service is hosted on AWS lambda and exposed using api gateway.
To keep the project simple and straight only one Resource, one GET method, one Stage is implemented in API Gateway

The `cdk.json` file tells the CDK Toolkit how to execute the app. The build step is not required for JavaScript.

## Useful commands
 * `npm install`          to install packages required
 * `cdk deploy`           deploy this stack to your default AWS account/region
 * `cdk diff`             compare deployed stack with current state
 * `cdk synth`            emits the synthesized CloudFormation template

## Api GateWay link

The Api is available at [CalcService](https://g0illgewu0.execute-api.eu-north-1.amazonaws.com/prod)
Get is the only valid Method
## QueryParameters
Pass basic operations as query paramters with input numbers as shown below 
THe valid operations are add, substract, mutiply and divide.
* `?add=1,2`         performs addition [AddEndpoint](https://g0illgewu0.execute-api.eu-north-1.amazonaws.com/prod?add=1,2)
* `?substract=1,2`         performs substraction [SubstractEndpoint](https://g0illgewu0.execute-api.eu-north-1.amazonaws.com/prod?substract=1,2)
* `?multiply=1,2`         performs multiplication [MultiplyEndpoint](https://g0illgewu0.execute-api.eu-north-1.amazonaws.com/prod?multiply=1,2)
* `?divide=1,2`         performs division [DivideEndpoint](https://g0illgewu0.execute-api.eu-north-1.amazonaws.com/prod?divide=1,2)
## Success Response

```
{
    result: 3
}
```

## Fail Response

```
{
    result: "Error response reason"
}
```
PUT, POST, DELETE methods will return 400 invalid error and any other issues will respond 400 with error stack message;

