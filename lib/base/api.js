const cdk = require('aws-cdk-lib');
const api_gatewayv2 = require('aws-cdk-lib/aws-apigatewayv2');

class Api extends cdk.Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    let context = this.node.tryGetContext(props.env);
    // The code that defines your stack goes here
    let gw = new api_gatewayv2.CfnApi(this, id, {
      name: context.api.name,
      description: context.api.description,
      protocolType: context.api.protocol,
    })
    console.log(gw);
  }
}

module.exports = { Api }
