const core = require("@aws-cdk/core");
const apigateway = require("@aws-cdk/aws-apigateway");
const lambda = require("@aws-cdk/aws-lambda");


class CalcService extends core.Construct {
  constructor(scope, id) {
    super(scope, id);

    const handler = new lambda.Function(this, "CalcHandler", {
      runtime: lambda.Runtime.NODEJS_10_X,
      code: lambda.Code.fromAsset("resources"),
      handler: "calcService.main",
    });

    const restApi = new apigateway.RestApi(this, "calc-api", {
      restApiName: "Calc Service",
      description: "This service serves as calculator."
    });
    const getCalcIntegration = new apigateway.LambdaIntegration(handler, {
      requestTemplates: { "application/json": '{ "statusCode": "200" }' }
    });

    restApi.root.addMethod("GET", getCalcIntegration); // GET /
  }
}


module.exports = { CalcService }