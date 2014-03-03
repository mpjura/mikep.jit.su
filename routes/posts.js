/**
* Post routes
**/
var fs = require('fs');
var marked = require('marked');

var posts = fs.readdirSync('./posts');

module.exports = function( req, res ) {
  var file = req.params.slug + '.md';

  if ( posts.indexOf( file ) < 0 ) {
    res.send('Sorry, couldn\'t find that post');
    return;
  }

  fs.readFile('./posts/' + file, 'utf-8', function( err, contents ){

    res.render('post', { contents: marked( contents ) } );

  });

};
