/**
 * @author Jia-Cheng Shih
 */

var ezWeb = require('ezWeb');

  
var app = ezWeb.config();
app.get('/json/*', ezWeb.fileResp);
app.get('/user', function(req, resp){
	if (req.query.account=='dsxs')
		resp.json({result: false});
	else
		resp.json({result: true});
});
app.post('/user', function(req, resp){
	console.log(req.body);
	resp.json({result: true});
});
app.post('/user/auth', function(req, resp){
	if (req.body.account=='dsxs' && req.body.password=='123')
		resp.json({result: true});
	else
		resp.json({result: false});
});
app.delete('/user', function(req, resp){
	console.log(req.body);
	resp.json({result: true, method: 'delete'});
});
app.put('/user', function(req, resp){
	console.log(req.body);
	resp.json({result: true, method: 'put'});
});



// app.post('/', controllers.);
// app.post('/', controllers.);
// console.log(config.appRoot);
ezWeb.start(9090);


