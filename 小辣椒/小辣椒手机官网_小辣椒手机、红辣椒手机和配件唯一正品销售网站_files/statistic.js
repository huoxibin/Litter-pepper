/** 网站分析统计 **/
;var statistic = {};
statistic.init = function(ga){
    $("#slideBox .bd ul li:nth-child(2)").on('click',function(){
        ga('richTracker.send', 'event', 'img', 'click','new tern');
    });
};

statistic.init(ga);

