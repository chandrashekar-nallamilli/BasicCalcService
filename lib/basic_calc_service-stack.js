const cdk = require('@aws-cdk/core');
const calc_service = require('../lib/basic_calc_service');
class BasicCalcServiceStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);
    new calc_service.CalcService(this, 'CalcService');
    // The code that defines your stack goes here
  }
}

module.exports = { BasicCalcServiceStack }
