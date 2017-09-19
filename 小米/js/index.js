/*
* @Author: Administrator
* @Date:   2017-09-18 17:47:48
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-19 18:43:18
*/
function check(str,classname){
     let a=str.split(' ');
     for(let i=0;i<a.length;i++){
       if(a[i]==classname){
       	return true;
       }
     }
     return false;
 }
 function getclass(classname,ranger){
 	ranger=ranger?ranger:document;
    if(document.getElementsByClassName){
    	return ranger.getElementsByClassName(classname);
    }else{
    	let newarr=[];
    	let all=ranger.getElementsByTagName('*');
    	//let all=document.all;
    	for(let i=0;i<all.length;i++){
          if(check(all[i].className,classname)){
          	newarr.push(all[i]);
          }
    	}
    	return newarr;
    }
 }
function $(select,ranger){
	ranger=ranger?ranger:document;
	let first=select.charAt(0);
    if(first=='#'){
    	return document.getElementById(select.substring(1));
    }else if(first=='.'){
        return getclass(select.substring(1),ranger);
    }else if(/^[a-z][a-z1-7]{0,7}$/.test(select)){
         return ranger.getElementsByTagName(select);
    }
}


window.onload=function(){
	let che=document.getElementsByClassName('che')[0];

	let hezi=document.getElementsByClassName('hezi')[0];
	che.onmouseover=function(){
		hezi.style.display='block';
	}
	che.onmouseout=function(){
		hezi.style.display='none';
	}
    let nav=document.getElementsByTagName('nav')[0];
	let lis1=nav.getElementsByTagName('li');
	for(let i=0;i<lis1.length-2;i++){
		lis1[i].onmouseover=function(){
			let item1=this.getElementsByClassName('item1')[0];
			item1.style.display='block';
		}
		lis1[i].onmouseout=function(){
			let item1=this.getElementsByClassName('item1')[0];
			item1.style.display='none';
		}
	}

   

	let aside=document.getElementsByClassName('aside')[0];
	let lis=aside.getElementsByTagName('li');
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			let item=this.getElementsByClassName('item')[0];
			item.style.display='block';
			// item.style.background: #7c7c81;
		}
		lis[i].onmouseout=function(){
			let item=this.getElementsByClassName('item')[0];
			item.style.display='none';
		}
	}


	let banner=document.getElementsByClassName('banner')[0];
	let img=banner.getElementsByClassName('img-list')[0];
	let btn=banner.getElementsByClassName('btn-list1')[0];
	let imglist=img.getElementsByTagName('li');
	let btnlist=btn.getElementsByTagName('a');
    

  //   for(var i=0;i<btnlist.length;i++){
  //   	btnlist[i].index=i;
		// btnlist[i].onmouseover=function(){
		// 	for(var j=0;j<imglist.length;j++){
		// 	imglist[j].index=j;
		// 	imglist[j].style.display='none';
		//     }
		//     imglist[this.index].style.display='block';
		// }
		
  //    }

	



     let t;
     t=setInterval(move,1500);
     banner.onmouseover=function(){
     	clearInterval(t);
     }
     banner.onmouseout=function(){
     t=setInterval(move,1500);
     }
     let num=0;
     function move(){
     	num++;
     	if(num==imglist.length){
     		num=0;
     	}
     	for(let i=0;i<imglist.length;i++){        	
            	btnlist[i].style.background='#17171c'
            	imglist[i].style.display='none';
        }
        btnlist[num].style.background='#7c7c81';
        imglist[num].style.display='block';
     }
      function movel(){
     	num--;
     	if(num<0){
     		num=imglist.length-1;
     	}
     	for(let i=0;i<imglist.length;i++){        	
            	btnlist[i].style.background='#17171c'
            	imglist[i].style.display='none';
        }
        btnlist[num].style.background='#7c7c81';
        imglist[num].style.display='block';
     }
     for(let i=0;i<btnlist.length;i++){        	
            btnlist[i].onmouseover=function(){
                for(let i=0;i<btnlist.length;i++){
            	btnlist[i].style.background='#17171c'
            	imglist[i].style.display='none';
            	}
            	btnlist[i].style.background='#7c7c81';
            	imglist[i].style.display='block';
            	num=i;
            }
        }

       let left=$('.zuo1')[0];
       let rights=$('.you1')[0];
       left.onclick=function(){
       	movel();
       }
       rights.onclick=function(){
       	move();
       }

}