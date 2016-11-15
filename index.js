const chalk = require('chalk'),
      listEndpoints = require('express-list-endpoints'),
      Table = require('cli-table');

module.exports = function(app) {
  var table = new Table({
    head: ['METHOD', 'ROUTE'],
    colWidths: [25, 50]
  });

  listEndpoints(app).forEach((endpoint) => {
    endpoint.methods = makeMethodsColorsful(endpoint.methods);
    table.push([endpoint.methods.join(' '), endpoint.path]);
  });

  console.log(table.toString());
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
