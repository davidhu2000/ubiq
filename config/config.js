const readline = require('readline');
const fs = require('fs');

function configUbiq() {

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let config = JSON.parse( fs.readFileSync('./config/config.json').toString() );

  const backendSupported  = ['1: rails', '2: meteor',  '3: Phoenix']
  const frontendSupported = ['1: rails', '2: reactJS', '3: angularJS']

  rl.question(`What frontend framework would you like to use?\n${frontendSupported.join('\n')}\n> `, (answer) => {
    config.frontend = frontendSupported[parseInt(answer) - 1].slice(3);

    rl.question(`\nWhat backend framework would you like to use?\n${backendSupported.join('\n')}\n> `, answer => {
      config.backend = frontendSupported[parseInt(answer) - 1].slice(3);
      fs.writeFile('./config/config.json', JSON.stringify(config, null, 2));
      rl.close();
    })
  });
}

module.exports = configUbiq;
