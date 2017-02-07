#! /usr/bin/env node
const fs = require('fs');
const exec = require('child_process').exec;
const execFile = require('child_process').execFile;

const configUbiq = require('./config/config.js');

let command = process.argv[2];
let name = process.argv[3];

let config = JSON.parse( fs.readFileSync('./config/config.json').toString() );

switch(command) {
  case 'config':
    configUbiq();
    break;
  case 'new':
    const child = execFile(`${config.backend}`, [`new`, name], (error, stdout, stderr) => {
      if (error) {
          console.error('stderr', stderr);
          throw error;
      }
      console.log(stdout);
    });
    break;
}
