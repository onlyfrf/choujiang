function jgg(n){
	var i = 0;//索引
	var j = 32;//基础步数	
	var z = j+n;//总步数；
	var speed = 100;
	start();
	function start(){
		jgg.timer = setInterval(function(){
			i++;
			z--;
			if(i>=8){
				speed*=1.2;
				clearInterval(jgg.timer);
				i=0;
				start();
			}
			if(z<=3){
				speed = 600;
				clearInterval(jgg.timer);
				start();
			}
			$("#start2_1 img").eq(i).css("border","solid 5px aqua");
			$("#start2_1 img").eq(i).siblings("img").css("border","solid 5px white");
			if(z==0){
				clearInterval(jgg.timer);
				$("#zg").css("background","rgba(0,0,0,0.7)");
				$("#zg").css("display","block");
				$("#a3").css("display","block");
				if(n==7){
					$(".p_nr").html("很遗憾，没有中");
					$(".zjimg span img").attr("src","img/img/sudoku_09.jpg");
					$(".p_nr2").html("");
					$(".p_nr3").html("");
					$(".p_nr4").html("");
					$(".p_nr5").html("");
				}
				if(n==6){
					
					$(".zjimg span img").attr("src","img/img/sudoku_08.jpg");
					$(".p_nr2").html("蛋壳科技VR体验卡");
					$(".p_nr3").html("50元");
				}
				if(n==5){
					
					$(".zjimg span img").attr("src","img/img/sudoku_07.jpg");
					$(".p_nr2").html("陶进二胡工作室");
					$(".p_nr3").html("300元");
				}
				if(n==4){
					
					$(".zjimg span img").attr("src","img/img/sudoku_06.jpg");
					$(".p_nr2").html("圣雅瑜伽SPA会所储值卡");
					$(".p_nr3").html("2000元");
				}
				if(n==3){
					
					$(".zjimg span img").attr("src","img/img/sudoku_04.jpg");
					$(".p_nr2").html("S5健身俱乐部贵宾卡");
					$(".p_nr3").html("100元");
				}
				if(n==2){
					
					$(".zjimg span img").attr("src","img/img/sudoku_03.jpg");
					$(".p_nr2").html("中国联通流量卡");
					$(".p_nr3").html("50元");
				}
				if(n==1){
					
					$(".zjimg span img").attr("src","img/img/sudoku_02.jpg");
					$(".p_nr2").html("莱沃口腔储值卡");
					$(".p_nr3").html("200元");
				}
				if(n==0){
					
					$(".zjimg span img").attr("src","img/img/sudoku_01.jpg");
					$(".p_nr2").html("黄封村人参酒");
					$(".p_nr3").html("120元");
				}
			}
		},speed)
		
	}
	
}
