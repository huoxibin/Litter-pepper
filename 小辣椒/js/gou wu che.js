


   	$(document).ready(function(){
   		
   		
   		//滑动页首  “小辣椒”，显示对应div；
		
		      //第一滑动页面
			$("#top2-0").hover(f1,f2);
			function f1(){
				$(".may1").css({display:"block"});
			}
			function f2(){
				$(".may1").css({display:"none"});
			}
		
		
			  //第二滑动页面		
			$("#top2-e").hover(f3,f4);
			function f3(){
				$(".sum").css({display:"block"});
			}
			function f4(){
				$(".sum").css({display:"none"});
			}
			
			
   			
   	//数量加减处
		         //划过变色
		   $(".numb").hover(function(){
		   	    $(this).css({background:"yellow"})
		   },function(){
		   	    $(this).css({background:"#fff"})
		   });
		   
		         //数量加减
		        var num=1;
		    $(".numbr-jia").on("click",function(){
				num++;
				$(".num-d").html(num);
				$("#top3-span").html(num);
			    $(".xiaoj").html(num*599);
			    $("#big-money").html(num*599);
			});
			$(".numbr-jian").on("click",function(){
				num--;
				if(num<=1){
					num=1
				}
				$(".num-d").html(num);
				$("#top3-span").html(num);
			    $(".xiaoj").html(num*599);
			    $("#big-money").html(num*599);
			});
			
		// X 效果 整个消失
		 $("#cha").on("click",function(){
		 	 $(".shop-tab").hide();
		 	 $("#top3-span").hide();
		 	 $("#big-money").html(00);
		 });
		 
		 
		 
		 
   	});