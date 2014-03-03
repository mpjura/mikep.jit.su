
/**
* GET home page.
**/

var globals = {
  title: 'Mike Pjura',
  subtitle: 'A place to put my stuff.'
};

exports.index = function(req, res){
  res.render('index', globals );
};