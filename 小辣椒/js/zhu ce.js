

	$(document).ready(function(){
		
		  /*------------------手机号输入-----------------*/
		 $("#mobile").blur(function(){
        var reg=/^1[3|4|5|7|8]\d{9}$/;
        var flag=reg.test($("#mobile").val());
        if(flag==false){
            $("#mobile_span").show();
            $("mobile_sp").hide();
            regist=false;
        }else{
            $("#mobile_sp").show();
             $("#mobile_span").hide();
            regist=true;
        }
    });
    
     /*------------------密码验证-----------------*/
     $("#password").blur(function(){
         var reg=/^[a-z0-9_-]{6,16}$/;
         var flag=reg.test($("#password").val());
         if($("#password").val()!=""){ 
            if(flag==false){
                $("#p3").show();
                $("#em").hide();
                 regist=false;
            }else{
                $("#em").show();
                regist=true;
            }
         }
         
    });
    $("#password").focus(function(){
      $("#p3").hide();
  });
 
 /*------------确认密码--------------------*/  
       $("#repword").blur(function(){
         if($("#repword").val()!=""){
              if($("#repword").val()==$("#pword").val()){
                $("#reem").show();
                  regist=true;
              }else{
                $("#p4").show();
                $("#reem").hide();
                 regist=false;
            }   
         }     
    });
    $("#repword").focus(function(){
      $("#p4").hide();
  });               
		  	
	});

 