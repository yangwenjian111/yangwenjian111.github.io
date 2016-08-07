function rnd(n,m){
			return Math.floor(Math.random()*(m-n)+n);
		}
		$(function(){
			var str='人生只有一次，不被世俗束缚是我的唯一信条。生命太过短促，犹如白驹过隙刹那即失，所以最好的规划就是顺其自然，与其不顾一切的抵达目的地，不如放缓脚步欣赏沿途的风景，在巅峰时尽情享受人生的高潮，在低谷时安静的坐下看上面的风景，我的人生我自己主宰，不在乎结果是否辉煌，只在乎过程是否精彩~'
			var timer=null;
			var oP=document.getElementById('p');
			for(var i=0; i<str.length; i++){
				var oS=document.createElement('span');
				oS.innerHTML=str.charAt(i);
				oP.appendChild(oS);
			}
			var aS=oP.children;
			var i=0;
			timer=setInterval(function(){
				aS[i].style.display='block';
				startMove(aS[i],{opacity:1});
				i++;

				if(i==aS.length){
					clearInterval(timer);
				}
			},200);
			$('.list li').mouseover(function(){
				$('.list li').attr('class','');
				$(this).attr('class','on')
			});
			$('.list li').eq(0).click(function(){
				$(document).scrollTop(960)
			});
			$('.list li').eq(1).click(function(){
				$(document).scrollTop(1360)
			});
			$('.list li').eq(2).click(function(){
				$(document).scrollTop(1960)
			});
			$('.list li').eq(3).click(function(){
				$(document).scrollTop(2740)
			});
			$('.list li').eq(4).click(function(){
				$(document).scrollTop(3540)
			});
			$(window).scroll(function(){
				if($(document).scrollTop()<=960){
					$('.list li').attr('class','');
					$('.list li').eq(0).attr('class','on');
				}else if ($(document).scrollTop()>960 && $(document).scrollTop()<=1360){
					$('.list li').attr('class','');
					$('.list li').eq(1).attr('class','on');
				}else if ($(document).scrollTop()>1360 && $(document).scrollTop()<=1960){
					$('.list li').attr('class','');
					$('.list li').eq(2).attr('class','on');
				}else if ($(document).scrollTop()>1960 && $(document).scrollTop()<=2740){
					$('.list li').attr('class','');
					$('.list li').eq(3).attr('class','on');
				}else{
					$('.list li').attr('class','');
					$('.list li').eq(4).attr('class','on');
				}
			});
			if( $('#nivoSlider').size() > 0 ) {
		
		    	$('#nivoSlider').nivoSlider({
		    		effect: 'random',
					pauseTime: 5000
		    	});
			
			}
			var oBox=document.getElementById('box');
			var R=4
			var C=7;
			var iNnw=0;
			var ok=true;
			for(var r=0; r<R; r++){
				for (var c=0; c<C; c++){
					var oSpan=document.createElement('span');
					oBox.appendChild(oSpan);
					oSpan.style.width=oBox.offsetWidth/C+'px';
					oSpan.style.height=oBox.offsetHeight/R+'px';

					oSpan.style.left=oSpan.offsetWidth*c+'px';
					oSpan.style.top=oSpan.offsetHeight*r+'px';

					oSpan.style.backgroundPosition=-oSpan.offsetLeft+'px  '+-oSpan.offsetTop+'px';
				}
			}
			var aSpan=oBox.children;
			oBox.onclick=tab;
			tab()
			setInterval(tab,3000)
			function tab(){
				if (!ok)return;
				ok=false;
				iNnw++;
				for (var i = 0; i < aSpan.length; i++) {
					var x=aSpan[i].offsetLeft+aSpan[i].offsetWidth/2-oBox.offsetWidth/2;
					var y=aSpan[i].offsetTop+aSpan[i].offsetHeight/2-oBox.offsetHeight/2;

					aSpan[i].style.transition='1s all ease';
					aSpan[i].style.transform='translate('+x+'px,'+y+'px) rotateX('+rnd(-180,180)+'deg)  rotateY('+rnd(-180,180)+'deg)';
					aSpan[i].style.opacity='0';
				}
			}
			aSpan[1].addEventListener('transitionend',function(){
				for (var i = 0; i < aSpan.length; i++) {
					aSpan[i].style.opacity='1';
					aSpan[i].style.transition = "none";
					aSpan[i].style.transform='translate(0px,0px) rotateX(0deg)  rotateY(0deg)';
					aSpan[i].style.backgroundImage='url(img/'+iNnw%6+'.jpg)';
				}
				oBox.style.backgroundImage='url(img/'+(iNnw+1)%6+'.jpg)'
				ok=true;
			},false)
		})
