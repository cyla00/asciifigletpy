const figlet = require('figlet');

const titolo = figlet('pandora', {
  font: 'Roman',
}, (err, result) => {
    if (err) {
        console.log('qualcosa è andato storto...');
        console.dir(err);
  }
  console.log(result);
});
