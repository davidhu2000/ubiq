#! /usr/bin/env node

const exec = require('child_process').exec;

const setupUbiq = require('./config.js');

let config = {
  frontend: '',
  backend: ''
}

let command = process.argv[2];

switch(command) {
  case 'setup' || 'config':

    config = configUbiq(config);
    console.log(config);
    break;
}
