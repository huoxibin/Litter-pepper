		
		//  轮   播    图    处  调    用
		var l = s =0, com;
			function showSuto(){	  
			  s = s >=(com -1) ?0 : ++s;
			  console.log(s);
			   $("#lun1-zong li").eq(s).trigger('click');
			}
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
			
			  //第三滑动页面		
			$("#top3-2").hover(f5,f6);
			function f5(){
				$("#xlj").css({display:"block"});
			}
			function f6(){
				$("#xlj").css({display:"none"});
			}
			
			
			//  轮   播    图    处
		com=$("#bd1 a").length;
		$("#bd1 a:not(:first-child)").hide();
		$("#lun1-zong li").click(function() {
			var j = $(this).text() -1;//获取Li元素内的值，即1，2，3，
			s = j;
			if (j >= com) return;
			$("#bd1 a").filter(":visible").stop(true).hide().parent().children().eq(j).fadeIn(1000);
			//document.getElementById("lun1-zong").style.background="";
			$(this).toggleClass("on");
			$("#lun1-zong li").css({background:"black"});
			$(this).css({background:"red"});
			$(this).siblings().removeAttr("class");
		});		
		l = setInterval("showSuto()", 2000);
		$("#lun1-zong").hover(function(){clearInterval(l)}, function(){l = setInterval("showSuto()", 2000);});	
			
			
		//数量加减处
		         //划过变色
		   $(".numb").hover(function(){
		   	    $(this).css({background:"yellow"})
		   },function(){
		   	    $(this).css({background:"#fff"})
		   });
		   
		         //数量加减
		        var num=1;
		    $(".numbr2").on("click",function(){
				num++;
				$(".ap").html(num);
				$("#top3-span").html(num);
				$(".buy-money").html(num*699);
			})
			$(".numbr1").on("click",function(){
				num--;
				if(num<=1){
					num=1
				}
				$(".ap").html(num);
				$("#top3-span").html(num);
				$(".buy-money").html(num*699);
			})
		
		
		         
		//轮播图 右边小详情处 滑动效果
		
		      //第1处		
			$("#li1").hover(function(){
				$("#yin1").css({display:"block"});
		  },function(){
				$("#yin1").css({display:"none"});
		  });
		    //第2处		
			$("#li2").hover(function(){
				$("#yin2").css({display:"block"});
		  },function(){
				$("#yin2").css({display:"none"});
		  });
		    //第3处		
			$("#li3").hover(function(){
				$("#yin3").css({display:"block"});
		  },function(){
				$("#yin3").css({display:"none"});
		  });
		    //第4处		
			$("#li4").hover(function(){
				$("#yin4").css({display:"block"});
		  },function(){
				$("#yin4").css({display:"none"});
		  });
		    //第5处		
			$("#li5").hover(function(){
				$("#yin5").css({display:"block"});
		  },function(){
				$("#yin5").css({display:"none"});
		  });
		    //第6处		
			$("#li6").hover(function(){
				$("#yin6").css({display:"block"});
		  },function(){
				$("#yin6").css({display:"none"});
		  });
		  
		   $(function(){
     	
	     	 num=1;     	 
	     	 $("#numbr2").click(function(){
	     	 	num++;
	     	 	$("#input").val(num);
	     	 
         })

	});
	});
	
    