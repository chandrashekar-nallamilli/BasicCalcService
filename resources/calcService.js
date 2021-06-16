function validateNumbers(numbers) {
  numbers.forEach(function (number) {
    if (/[a-zA-Z]/i.test(number)) {
      throw "Only Numbers for input";
    }
  });
}

exports.main = async function (event, context) {
  try {
    var method = event.httpMethod;
    const isQueryParameters = event.queryStringParameters
      ? !(
          event.queryStringParameters &&
          Object.keys(event.queryStringParameters).length === 0 &&
          event.queryStringParameters.constructor === Object
        )
      : false;
    let body;
    let numbers;
    if (method === "GET") {
      switch (true) {
        case isQueryParameters:
          const arthemticRequestKeys = Object.keys(event.queryStringParameters);
          const arthemticRequest = event.queryStringParameters;
          switch (arthemticRequestKeys[0]) {
            case "add":
              numbers = arthemticRequest.add.split(",");
              validateNumbers(numbers);
              body = {
                result: numbers.reduce(
                  (a, b) => parseFloat(a) + parseFloat(b),
                  0
                ),
              };
              break;
            case "substract":
              numbers = arthemticRequest.substract.split(",");
              validateNumbers(numbers);
              body = {
                result: numbers.reduce((a, b) => parseFloat(a) - parseFloat(b)),
              };
              break;
            case "multiply":
              numbers = arthemticRequest.multiply.split(",");
              validateNumbers(numbers);
              body = {
                result: numbers.reduce((a, b) => parseFloat(a) * parseFloat(b)),
              };
              break;
            case "divide":
              numbers = arthemticRequest.divide.split(",");
              validateNumbers(numbers);
              if (numbers.length > 2) throw "Only two numbers for divide";
              if(numbers[1] === '0') throw "Enter valid input, denominator cant be zero"
              body = {
                result: numbers.reduce((a, b) => parseFloat(a) / parseFloat(b)),
              };
              break;
            default:
              throw "Arthematic Operation Not Supported, valid options add, substract, divide, multiply";
          }
          return {
            statusCode: 200,
            headers: {},
            body: JSON.stringify(body),
          };
        default:
          body = {
            result: "Welcome try arthematic operations"
          }
          return {
            statusCode: 200,
            headers: {},
            body: JSON.stringify(body)
          };
      }
    }
    throw "We only accept GET";
  } catch (error) {
    console.info(error);
    var body = {
      result: error.stack || error,
    };
    return {
      statusCode: 400,
      headers: {},
      body: JSON.stringify(body),
    };
  }
};
