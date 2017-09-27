  // 函数区域
	 var t = n =0, count;
	 function showAuto()
			{
			n = n >=(count -1) ?0 : ++n;
			//console.log(n);
			$("#banner li").eq(n).trigger('click');
			}
		
	//内容轮播图第一
		var l = s =0, com;
	function showSuto(){	  
	  s = s >=(com -1) ?0 : ++s;
	 // console.log(s);
	   $("#lun1-zong li").eq(s).trigger('click');
	}
		//内容轮播图第二
		var d = x =0, comt;
	function showTuto(){	  
	  x = x >=(comt -1) ?0 : ++x;
	  console.log(x);
	   $("#lun2-zong li").eq(x).trigger('click');
	}

	//-----------------------------------------------------------------
	//=================================================================
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
			
		//-------------------------------------------------------------------- 
						
			//轮播图界面
		count=$("#banner_list a").length;
		$("#banner_list a:not(:first-child)").hide();
		$("#banner li").click(function() {
			var i = $(this).text() -1;//获取Li元素内的值，即1，2，3，4
			n = i;
			if (i >= count) return;
			$("#banner_list a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
			document.getElementById("banner").style.background="";
			$(this).toggleClass("on");
			$(this).siblings().removeAttr("class");
		});
		t = setInterval("showAuto()", 4000);
		$("#banner").hover(function(){clearInterval(t)}, function(){t = setInterval("showAuto()", 4000);});
		
		//-------------------------------------------------------------------- 
		
		//  页首位置  滑动展开页  11111
				$("#li1").hover(fa1,fa2);
			function fa1(){
				$("#yina1").css({display:"block"});
			}
			function fa2(){
				$("#yina1").css({display:"none"});
			}
		//  页首位置  滑动展开页  2222
				$("#li2").hover(fa3,fa4);
			function fa3(){
				$("#yina2").css({display:"block"});
			}
			function fa4(){
				$("#yina2").css({display:"none"});
			}
		//  页首位置  滑动展开页  33333
				$("#li3").hover(fa5,fa6);
			function fa5(){
				$("#yina3").css({display:"block"});
			}
			function fa6(){
				$("#yina3").css({display:"none"});
			}
		//  页首位置  滑动展开页  44444
				$("#li4").hover(fa7,fa8);
			function fa7(){
				$("#yina4").css({display:"block"});
			}
			function fa8(){
				$("#yina4").css({display:"none"});
			}
		//  页首位置  滑动展开页  55555
				$("#li5").hover(fa1,fa2);
			function fa9(){
				$("#yina5").css({display:"block"});
			}
			function fa10(){
				$("#yina5").css({display:"none"});
			}
			
	//-------------------------------------------------------------------- 
	
	//-----明星推荐处
	       //当点击  <  >按钮时
	    $("#xing-right").click(function(){
	    	$("#star-good").animate({marginLeft:"-720px"});
	    })
	    
	    $("#xing-left").click(function(){
	    	$("#star-good").animate({marginLeft:"0px"});
	    })
	    
	
	                //11111111111
	     $("#star-good-li1").hover(fss1,fss2);
			 function fss1(){
			 	$("#star-good-yi-id1").css({left:"-25%"});
			 	$("#star-good-an-id1").css({right:"0px"});
			 	$("#star-good-mai-id1").css({right:"0px"});
			 	$("#star-good-er-id1").css({left:"-100%"});
			 }
			 function fss2(){
				$("#star-good-yi-id1").css({left:"0px"});
			 	$("#star-good-an-id1").css({right:"-51%"});
			 	$("#star-good-mai-id1").css({right:"-100%"});
			 	$("#star-good-er-id1").css({left:"0px"});
			 }
			 
			          //22222222222
			  $("#star-good-li2").hover(fss3,fss4);
			 function fss3(){
			 	$("#star-good-yi-id2").css({left:"-25%"});
			 	$("#star-good-an-id2").css({right:"0px"});
			 	$("#star-good-mai-id2").css({right:"0px"});
			 	$("#star-good-er-id2").css({left:"-100%"});
			 }
			 function fss4(){
				$("#star-good-yi-id2").css({left:"0px"});
			 	$("#star-good-an-id2").css({right:"-51%"});
			 	$("#star-good-mai-id2").css({right:"-100%"});
			 	$("#star-good-er-id2").css({left:"0px"});
			 }
			          //3333333333
			  $("#star-good-li3").hover(fss5,fss6);
			 function fss5(){
			 	$("#star-good-yi-id3").css({left:"-25%"});
			 	$("#star-good-an-id3").css({right:"0px"});
			 	$("#star-good-mai-id3").css({right:"0px"});
			 	$("#star-good-er-id3").css({left:"-100%"});
			 }
			 function fss6(){
				$("#star-good-yi-id3").css({left:"0px"});
			 	$("#star-good-an-id3").css({right:"-51%"});
			 	$("#star-good-mai-id3").css({right:"-100%"});
			 	$("#star-good-er-id3").css({left:"0px"});
			 }
			 	          //444444444444
			  $("#star-good-li4").hover(fss7,fss8);
			 function fss7(){
			 	$("#star-good-yi-id4").css({left:"-25%"});
			 	$("#star-good-an-id4").css({right:"0px"});
			 	$("#star-good-mai-id4").css({right:"0px"});
			 	$("#star-good-er-id4").css({left:"-100%"});
			 }
			 function fss8(){
				$("#star-good-yi-id4").css({left:"0px"});
			 	$("#star-good-an-id4").css({right:"-51%"});
			 	$("#star-good-mai-id4").css({right:"-100%"});
			 	$("#star-good-er-id4").css({left:"0px"});
			 }
			 	          //5555555555
			  $("#star-good-li5").hover(fss9,fss10);
			 function fss9(){
			 	$("#star-good-yi-id5").css({left:"-25%"});
			 	$("#star-good-an-id5").css({right:"0px"});
			 	$("#star-good-mai-id5").css({right:"0px"});
			 	$("#star-good-er-id5").css({left:"-100%"});
			 }
			 function fss10(){
				$("#star-good-yi-id5").css({left:"0px"});
			 	$("#star-good-an-id5").css({right:"-51%"});
			 	$("#star-good-mai-id5").css({right:"-100%"});
			 	$("#star-good-er-id5").css({left:"0px"});
			 }
			       //66666666666
			  $("#star-good-li6").hover(fsos1,fsos2);
			 function fsos1(){
			 	$("#star-good-yi-id6").css({left:"-25%"});
			 	$("#star-good-an-id6").css({right:"0px"});
			 	$("#star-good-mai-id6").css({right:"0px"});
			 	$("#star-good-er-id6").css({left:"-100%"});
			 }
			 function fsos2(){
				$("#star-good-yi-id6").css({left:"0px"});
			 	$("#star-good-an-id6").css({right:"-51%"});
			 	$("#star-good-mai-id6").css({right:"-100%"});
			 	$("#star-good-er-id6").css({left:"0px"});
			 }
			      //77777777777
			  $("#star-good-li7").hover(fsos3,fsos4);
			 function fsos3(){
			 	$("#star-good-yi-id7").css({left:"-25%"});
			 	$("#star-good-an-id7").css({right:"0px"});
			 	$("#star-good-mai-id7").css({right:"0px"});
			 	$("#star-good-er-id7").css({left:"-100%"});
			 }
			 function fsos4(){
				$("#star-good-yi-id7").css({left:"0px"});
			 	$("#star-good-an-id7").css({right:"-51%"});
			 	$("#star-good-mai-id7").css({right:"-100%"});
			 	$("#star-good-er-id7").css({left:"0px"});
			 }
			      //8888888888888
			  $("#star-good-li8").hover(fsos5,fsos6);
			 function fsos5(){
			 	$("#star-good-yi-id8").css({left:"-25%"});
			 	$("#star-good-an-id8").css({right:"0px"});
			 	$("#star-good-mai-id8").css({right:"0px"});
			 	$("#star-good-er-id8").css({left:"-100%"});
			 }
			 function fsos6(){
				$("#star-good-yi-id8").css({left:"0px"});
			 	$("#star-good-an-id8").css({right:"-51%"});
			 	$("#star-good-mai-id8").css({right:"-100%"});
			 	$("#star-good-er-id8").css({left:"0px"});
			 }
			 
	//-------------------------------------------------------------------- 
	
			 /*精选配件*/
			  //1111111111
			  $("#part-right-li1").hover(part1,part2);
			 function part1(){
			 	$("#part-com1").css({display:"block"});
			 	
			 }
			 function part2(){
				$("#part-com1").css({display:"none"});
			 
			 }
			 //2222222222222
			  $("#part-right-li2").hover(part3,part4);
			 function part3(){
			 	$("#part-com2").css({display:"block"});
			 	
			 }
			 function part4(){
				$("#part-com2").css({display:"none"});
			 
			 } 
			 //33333333333333333
			 $("#part-right-li3").hover(part5,part6);
			 function part5(){
			 	$("#part-com3").css({display:"block"});
			 	
			 }
			 function part6(){
				$("#part-com3").css({display:"none"});
			 
			 }
			  //4444444444444444
			 $("#part-right-li4").hover(part7,part8);
			 function part7(){
			 	$("#part-com4").css({display:"block"});
			 	
			 }
			 function part8(){
				$("#part-com4").css({display:"none"});
			 
			 }
			  //555555555555555555
			 $("#part-right-li5").hover(part9,part10);
			 function part9(){
			 	$("#part-com5").css({display:"block"});
			 	
			 }
			 function part10(){
				$("#part-com5").css({display:"none"});
			 
			 }
			  //66666666666666666666666
			 $("#part-right-li6").hover(part11,part12);
			 function part11(){
			 	$("#part-com6").css({display:"block"});
			 	
			 }
			 function part12(){
				$("#part-com6").css({display:"none"});
			 
			 }
			//-------------------------------------------------------------------- 
			
			//图片内阴影  JS部分
			
			 $(".subc").hover(sub1,sub2);
			 function sub1(){
			 	$(this).css({"-webkit-box-shadow":"inset 0 0 20px #0CC",  
                             "-moz-box-shadow":"inset 0 0 20px #0CC",
                              "box-shadow":"inset 0 0 20px #0CC"
			 	
			 })
			 }
			 function sub2(){
				$(this).css({"-webkit-box-shadow":"inset 0 0 20px #fff",  
                             "-moz-box-shadow":"inset 0 0 20px #fff",
                              "box-shadow":"inset 0 0 20px #fff"
			 
			 })
			}
			//-------------------------------------------------------------------- 
			 // 内容区域     轮播图界面
			 	
			 //  内容区域   第一个轮播图
			 
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
		l = setInterval("showSuto()", 4000);
		$("#lun1-zong").hover(function(){clearInterval(l)}, function(){l = setInterval("showSuto()", 4000);});
		
			 //  内容区域   第一个轮播图
			 
		comt=$("#bd2 a").length;
		$("#bd2 a:not(:first-child)").hide();
		$("#lun2-zong li").click(function() {
			var j = $(this).text() -1;//获取Li元素内的值，即1，2，3，
			x = j;
			if (j >= comt) return;
			$("#bd2 a").filter(":visible").stop(true).hide().parent().children().eq(j).fadeIn(1000);
			//document.getElementById("lun1-zong").style.background="";
			$(this).toggleClass("un");
			$("#lun2-zong li").css({background:"black"});
			$(this).css({background:"red"});
			$(this).siblings().removeAttr("class");
		});
		
		d = setInterval("showTuto()", 4000);
		$("#lun2-zong").hover(function(){clearInterval(d)}, function(){d = setInterval("showTuto()", 4000);});
		
		
		  //  页面右侧 
		  $("#right-tab").hover(r1,r2);
			function r1(){
				$("#tab-ul").css({display:"block"});
			}
			function r2(){
				$("#tab-ul").css({display:"none"});
			}
			
			
	});
	
	
	  
			
