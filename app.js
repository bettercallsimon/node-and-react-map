/**
 * Criminal server app.js
 */

app.use(express.static(path.join(__dirname, '../client/build')));