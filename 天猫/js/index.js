/*
* @Author: Administrator
* @Date:   2017-09-18 17:19:00
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-19 18:44:37
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
	let aside=document.getElementsByClassName('cedaohang')[0];
	let lis=aside.getElementsByTagName('li');
    let items=document.getElementsByClassName('item');
    // console.log(items);	
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			items[i].style.display='block';
		}
		lis[i].onmouseout=function(){
			items[i].style.display='none';
		}
	}

	let bigg=document.getElementsByClassName('bigg')[0];
	let img=bigg.getElementsByClassName('img-list')[0];
	let btn=bigg.getElementsByClassName('btn-list')[0];
	let imglist=img.getElementsByTagName('li');
	let btnlist=btn.getElementsByTagName('li');
     let t;
     t=setInterval(move,1500);
     bigg.onmouseover=function(){
     	clearInterval(t);
     }
     bigg.onmouseout=function(){
     t=setInterval(move,1500);
     }
     let num=0;
     function move(){
     	num++;
     	if(num==imglist.length){
     		num=0;
     	}
     	for(let i=0;i<imglist.length;i++){        	
            	btnlist[i].style.background='rgba(255,255,255,0)';
            	imglist[i].style.display='none';
        }
        btnlist[num].style.background='#fff';
        imglist[num].style.display='block';
     }
        for(let i=0;i<btnlist.length;i++){        	
            btnlist[i].onmouseover=function(){
            	for(let i=0;i<btnlist.length;i++){
            	btnlist[i].style.background='rgba(255,255,255,0)';
            	imglist[i].style.display='none';
            	}
            	btnlist[i].style.background='#fff';
            	imglist[i].style.display='block';
            	now=i;
            	num=i;
            }
        }
}