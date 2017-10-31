// routes/index.js
module.exports = function(app,fs)
{
    var ai = require(__dirname + "/../process/ai.js");
    // 키보드 init
    app.get('/api/keyboard', function(req,res){
        fs.readFile( __dirname + "/../data/" + "keyboard.json", 'utf8', function (err, data) {
           console.log( 'keyboard called' );
           res.end( data );
       });
    });
    
    // 채팅 응답
    app.post('/api/message', function(req,res){
        ai.message(req.body.user_key, req.body.type, req.body.content, function (err, data) {
           console.log('new ' +req.body.type+ ' message');
           res.end( JSON.stringify(data) );
       });
    });


}