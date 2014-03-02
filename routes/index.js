var _ = require('underscore');

/* Locals */
var meta = {
  title: 'Mike Pjura',
  description: 'I\'m Mike Pjura, a front-end web developer from New Jersey. This is my awesome Nodejitsu site.' 
};

var indexLocals = {
  meta: {},
  title: 'Mike Pjura'
};
_.extend( indexLocals.meta, meta );

var resumeLocals = {
  meta: {},
  title: 'Mike Pjura'
};
_.extend( resumeLocals.meta, meta );


/* GET - home page */
exports.index = function(req, res){
  res.render('resume', resumeLocals );
};

/* GET - resume */
 exports.resume = function(req,res){
   res.render('resume', resumeLocals );
 };