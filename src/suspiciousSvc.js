const monk = require('monk');
const coMonk = require('co-monk');
const mongoUrl = require('./config').mongoUrl;
const debug = require('debug')('api:todosdb');
const parse = require('co-body');
var co = require('co');

const db = monk(mongoUrl);
const suspicious = coMonk(db.get('suspicious'));

module.exports = function*() {
    const rows = [];

    console.log(rows);

    (yield suspicious.find({})).forEach( s => {
        console.log(s);
        rows.push(`
      <tr>
        <td>${s.listId}</td>
        <td>${s.listName}</td>
        <td>${s.todoId}</td>
        <td>${s.todoText}</td>
      </tr>
    `);
});

    console.log(rows);

    return `
  <html>
    <body>
        <table border="1" cellpadding="10">
          <tr>
            <th>List ID</th>
            <th>List Name</th>
            <th>ToDo ID</th>
            <th>ToDo Text</th>
          </tr>
          ${rows.join('')}
        </table>
    </body>
  </html>
  `;


};