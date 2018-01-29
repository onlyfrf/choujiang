onload = function() {
	var start1_1 = document.querySelector("#start1_1");
	var start1_1_span = start1_1.querySelectorAll("span");
	//点击事件
	//开始游戏
	$(".startgame").on("click", function() {
		$(".header").css("display", "none");
		$("#start").css("display", "block");
	});
	//游戏规则
	start1_1_span[3].onclick = function() {
		$("#zg").css("display", "block");
		$("#a1").css("display", "block");
	}
	$("#zg_2 h2").on("click", function() {
		$("#zg").css("display", "none");
		$("#a1").css("display", "none");
	})
	$(".p_qd").on("click", function() {
			$("#zg").css("display", "none");
			$("#a3").css("display", "none");
		})
		//登录用户
	$("#start3_1").on("click", function() {
		if (getCookie("name") && getCookie("shouji")) {
			$("#zg").css("display", "none");
			$("#a2").css("display", "none");
			$("#start").css("display", "none");
			$(".footer").css("display", "block");
		}else{
			$("#zg").css("display", "block");
			$("#a2").css("display", "block");
		} 
		
	})
	$(".dl_2_2").on("click", function() {
		$("#zg").css("display", "none");
		$("#a2").css("display", "none");
	});
	//继续游戏
	$(".footer_3_1").on("click",function(){
		$("#start").css("display", "block");
		$(".footer").css("display", "none");
	})
	//兑奖
	var jiangpin = document.querySelectorAll(".jiangpin");
	var jiangpin_btn = document.querySelectorAll(".jiangpin_btn");
	for(var i=0 ;i<jiangpin_btn.length;i++){
		var k=jiangpin[i];
		k.index=i;
		$(jiangpin[i]).on("click",function(){
			$("#zg").css("display","block");
			$("#a4").css("display","block");
			i=this.index;
			console.log(i);
			
		});
		$(".duijiang_2_1").on("click",function(){
			if($(".duijiang_inp").val()==1234){
				
				$("#zg").css("display","none");
				$("#a4").css("display","none");
				$(".duijiang_1 p").css("color","white");
				$(".jiangpin_btn").eq(i).html("已兑换");
				$(jiangpin[i]).off("click");
			}else {
				$(".duijiang_1 p").css("color","red");
			}
			
		})
		
	}
	//取消兑奖
	$(".duijiang_2_2").on("click",function(){
		$("#zg").css("display","none");
		$("#a4").css("display","none");
	})
	//轮播
	var tonggao_1_1 = document.querySelector(".tonggao_1_1");
	var x = 0;
	setInterval(function() {
		x += 2;
		tonggao_1_1.style.top = -x + "px";
		if (x == 176) {
			x = 0;
		}
	}, 100);
	//用户信息
	var name_1 = document.querySelector(".name_1");
	var sj_1 = document.querySelector(".sj_1");

	$(".dl_2_1").on("click", function() {
		 
			if ($(".name_1").val() != "" && $(".sj_1").val() != "") {
				$(".jg_1").css("color", "white");
				$(".jg_2").css("color", "white");
				$("#zg").css("display", "none");
				$("#a2").css("display", "none");
				$("#start").css("display", "none");
				$(".footer").css("display", "block");
			} else {
				$(".jg_1").css("color", "red");
				$(".jg_2").css("color", "red");
			}
		


	});

	//判断cookie是否存在用户名
	if (getCookie("name")) {
		name_1.value = getCookie("name");
	}
	if (getCookie("shouji")) {
		name_1.value = getCookie("shouji");
	}
	//点击登录按钮后记住用户名
	$(".dl_2_1").on("click", function() {

		//判断用户名是否有值，有则将值存入cookie
		if (name_1.value != "") {
			setCookie("name", name_1.value);
			
		}
		if (sj_1.value != "") {
			setCookie("shouji", sj_1.value);
			
		}

	});
}