const chalk = require('chalk'),
      listEndpoints = require('express-list-endpoints');

module.exports = function(app) {
  listEndpoints(app).forEach((endpoint) => {
    console.log(
      makeMethodsColorsful(endpoint.methods).join(' '), endpoint.path
    );
  });
};

function makeMethodsColorsful(methods) {
  methods.forEach((method, index) => {
    switch(method) {
      case 'GET':
        methods[index] = chalk.yellow(method);
        break;
      case 'POST':
        methods[index] = chalk.green(method);
        break;
      case 'DELETE':
        methods[index] = chalk.red(method);
        break;
      case 'PUT':
        methods[index] = chalk.cyan(method);
        break;
    }
  });

  return methods;
}
