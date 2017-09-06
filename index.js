const express = require('express');
const path = require('path');

const app = express();


app.set('port', process.env.PORT || 3002);
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(app.get('port'), () => {
  console.log('Server has started');
});

module.exports = app;
