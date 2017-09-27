
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
		
			//小tab json传入
			$.get("json/shang pin ye.json",houme);
			function houme(data){
				var $ul=$("<ul></ul>").appendTo(".dl-dd");
				for(var i=0;i<data.length;i++){
					var $li=$("<li></li>").appendTo($ul);
					$li.html(data[i].li);
				}
			}
			
			//商品列表处
			$.get("json/shang pin ye2.json",hose);
			function hose(dadd){
				var $ul=$("<ul></ul>").appendTo(".boss-p");
				for(var i=0;i<dadd.length;i++){
					var $lei=$("<li class='li-lei'></li>").appendTo($ul);
					var $huan1=$("<div class='huan1'</div>").appendTo($lei);
					var $fil=$("<a class='fil-img'></a>").appendTo($huan1);
				    var $img=$("<img src='"+dadd[i].src+"'/>").appendTo($fil);
				    
				    var $title=$("<span class='title'></span>").appendTo($huan1);
				     $title.html(dadd[i].title);
				    
				    var $pri=$("<span calss='pri'></span>").appendTo($huan1);
				     $pri.html(dadd[i].pri);
				    
				    var $tiem=$("<div class='tiem'></div>").appendTo($huan1);
				    var $a=$("<a></a>").appendTo($tiem);
				     $a.html(dadd[i].a);
				     
				    var $jing1=$("<span class='jing1'></span>").appendTo($huan1);
				     $jing1.html(dadd[i].jing1);
				    
				}
			}
			
		
			
	});
