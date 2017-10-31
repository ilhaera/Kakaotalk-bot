var fs = require("fs");
const unexperror='알 수 없는 에러가 발생했습니다.';
const defaulttext = '이해를 못 하겠어요ㅠㅠ';

var defaultsay = function(text,callback){
     fs.readFile( __dirname + "/../data/talk.json", 'utf8',  function(err, data){
         if (err){
             return 'console.log("'+unexperror+'")';
         }
         var result = 'restext = "'+defaulttext+'"';
         var talks = JSON.parse(data);
         for(var k in talks) {
            var nowjson = Object(talks[k]);
             switch (nowjson.bind) {
                 case 'match':
                     if (text == nowjson.text){
                        result = nowjson.response;
                     }
                     break;
                 case 'find':
                     var isex = text.indexOf(nowjson.text);
                        if(isex != -1){
                            result = nowjson.response;
                        };
                     break;
                 case 'start':
                     var isex = text.indexOf(nowjson.text);
                        if(isex == 0){
                            result = nowjson.response;
                        };
                     break;
                 case 'end':
                     var isex = text.indexOf(nowjson.text);
                        if((isex == text.length-nowjson.text.length)&&(isex > 0)){
                            result = nowjson.response;
                        };
                     break;
                 default:
                     // code
             }
        }
        var err = false;
        callback(err,result);
     });
     
}
exports.message = function(userkey,type,content,callback){
    var restext = '';
    
    switch (type) {
        case 'text':
            defaultsay(content,function(err,data){
                eval(data); // talk.json에서 불러온 코드 실행
                
                var err = false;
                var callbackdata = {message:{text:''}};
                callbackdata.message.text = restext;
                callback(err,callbackdata);
            });
            break;
        
        default:
            restext = unexperror;
    }

}