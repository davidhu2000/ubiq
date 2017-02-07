const readline = require('readline-sync');

function configUbiq(config) {

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const backendSupported  = ['1: rails', '2: meteor']
  const frontendSupported = ['1: rails', '2: reactJS', '3: angularJS']

  rl.question(`What frontend framework would you like to use?\n${frontendSupported.join('\n')}\n> `, (answer) => {
    config.frontend = frontendSupported[parseInt(answer) - 1].slice(3);

    rl.question(`What backend framework would you like to use?\n${backendSupported.join('\n')}\n> `, answer => {
      config.backend = frontendSupported[parseInt(answer) - 1].slice(3);
      rl.close();
    })
  });

  return config;
}

module.exports = configUbiq;
