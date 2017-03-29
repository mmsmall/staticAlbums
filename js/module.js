//文件夹跳转********************************************************************************
function enter(){
	var folderName = this.innerHTML;
	alert("将跳转至" + folderName + "文件夹");
	return false;
}

//弹出层********************************************************************************
function openNew(){
	//获取页面的高度和宽度
	var sWidth=document.body.scrollWidth;
	var sHeight=document.documentElement.clientHeight;
	// 有时为document.body.scrollHeight;
	
	//获取页面的可视区域高度和宽度
	var wHeight=document.documentElement.clientHeight;
	
	//创建一个遮罩层 
	var oMask=document.createElement("div");
		oMask.id="mask";
		oMask.style.height=sHeight+"px";
		oMask.style.width=sWidth+"px";
		document.body.appendChild(oMask);

	//创建内容层
	var oPopup=document.createElement("div");
		oPopup.id="popup";

		//获得所有文件名
		//找出全部原有文件夹名
    	var aSpan = document.getElementsByClassName('icon-folder');
    	var arr =[];
    	
    	for(var i=0; i<aSpan.length; i++){
    		arr.push(aSpan[i].innerHTML);
    	}
    	var str = '';

    	for(var i = 0; i< arr.length; i++){
    		str += '<option>上传到相册：'+ arr[i]+'</option>';
		}

		oPopup.innerHTML = 
		'<form method="post" action="#" enctype="multipart/form-data" >'
			+ '<select name="album">'
				+ str
			+ '</select>'
			+ '<input type="file" accept="image/*" name="pic" multiple=true >'
			+ '<input type="submit" id ="submit" value="上传">'  
			+ '<input type="button" id="close" value="取消">' +
		'</form>';
		

		document.body.appendChild(oPopup);
	
	//获取登陆框的宽和高
	var dHeight=oPopup.offsetHeight;
	var dWidth=oPopup.offsetWidth;
		//设置登陆框的left和top
		oPopup.style.left=sWidth/2-dWidth/2+"px";
		oPopup.style.top=wHeight/2-dHeight/2+"px";



	//点击关闭按钮
	var oClose=document.getElementById("close");
	
		//点击登陆框以外的区域也可以关闭登陆框
		oClose.onclick=oMask.onclick=function(){
			document.body.removeChild(oPopup);
			document.body.removeChild(oMask);
		};
					
	
				
}

