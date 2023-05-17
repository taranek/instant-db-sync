
const fs = require('fs');
const path = require('path');

module.exports.deleteFromIssuesCollection = fs.readFileSync(path.join(__dirname, 'deleteFromIssuesCollection.gql'), 'utf8');
module.exports.deleteFromUsersCollection = fs.readFileSync(path.join(__dirname, 'deleteFromUsersCollection.gql'), 'utf8');
module.exports.insertIntoIssuesCollection = fs.readFileSync(path.join(__dirname, 'insertIntoIssuesCollection.gql'), 'utf8');
module.exports.insertIntoUsersCollection = fs.readFileSync(path.join(__dirname, 'insertIntoUsersCollection.gql'), 'utf8');
module.exports.updateIssuesCollection = fs.readFileSync(path.join(__dirname, 'updateIssuesCollection.gql'), 'utf8');
module.exports.updateUsersCollection = fs.readFileSync(path.join(__dirname, 'updateUsersCollection.gql'), 'utf8');
