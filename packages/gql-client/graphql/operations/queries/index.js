
const fs = require('fs');
const path = require('path');

module.exports.issuesCollection = fs.readFileSync(path.join(__dirname, 'issuesCollection.gql'), 'utf8');
module.exports.node = fs.readFileSync(path.join(__dirname, 'node.gql'), 'utf8');
module.exports.usersCollection = fs.readFileSync(path.join(__dirname, 'usersCollection.gql'), 'utf8');
