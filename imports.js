const fs = require('fs');
const { resolve } = require('path');
const homedir = require('os').homedir();
const crypto = require('crypto');
const { readdir } = require('fs').promises;