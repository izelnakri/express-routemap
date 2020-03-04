const fs = require('fs');
const chalk = require('chalk');
const listEndpoints = require('express-list-endpoints');
const Table = require('cli-table');

module.exports = function(app, filename) {
  let table = new Table({
    head: ['METHOD', 'ROUTE'],
    colWidths: [25, 50]
  });

  listEndpoints(app).forEach((endpoint) => {
    endpoint.methods = makeMethodsColorsful(endpoint.methods);
    table.push([endpoint.methods.join(' '), endpoint.path]);
  });

  if (typeof filename === 'string') {
    return fs.writeFile(filename, table.toString(), (error) => {
      if (error) throw error;
      console.log(`Printed route table to ${filename}`);
    });
  }

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
