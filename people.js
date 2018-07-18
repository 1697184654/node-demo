var request = require('request');

exports.clickLike=function(){
    request({
        uri:'https://app.peopleapp.com/Api/600/DetailApi/shareArticleClickLike?article_id=1919453',
        headers:{
            'Referer':'https://www.baidu.com'
        }
    },function(err,res,body){

        if( !err && res.statusCode==200 ){
    
            console.log(JSON.parse(body));

        }  

    });
};

exports.preview=function(sum){

    request({
        uri:'https://app.peopleapp.com/Api/600/DetailApi/shareArticle?type=0&article_id=1919453&from=singlemessage&isappinstalled=0',
        headers:{
        
            'Referer':'https://www.baidu.com'
        
        }
    
    },function(err,res,body){
    
        if ( !err && res.statusCode==200 ){
        
            console.log(sum +'---ok!');

        }
    
    });

};
