

$(document).ready(function(){
		   
		  /*------------------手机号输入-----------------*/
		 $("#login-in1").blur(function(){
        var reg=/^1[3|4|5|7|8]\d{9}$/;
        var flag=reg.test($("#login-in1").val());
        if(flag==false){
            $("#login_sp").show();          
            regist=false;
        }else{          
             $("#login_sp").hide();
            regist=true;
        }
    });
    
     /*------------------密码验证-----------------*/
     $("#pas1").blur(function(){
         var reg=/^[a-z0-9_-]{6,16}$/;
         var flag=reg.test($("#pas1").val());
         if($("#pas1").val()!=""){ 
            if(flag==false){
                $("#login-sp2").show();              
                 regist=false;
            }else{
              $("#login-sp2").hide();
                regist=true;
            }
         }
         
    });
  
		
	
	});