window.onload = function () {
    var btn = document.querySelector(".btn");
    var bg = document.querySelector(".bg");
    var box = document.querySelector(".box");
    var text = document.querySelector(".text");
    var flag=false;
    //选择器封装
    function $(name){
        return document.querySelector(name);
    };

    var btn=$(".btn"),
        bg=$(".bg");
    


    //按下去 移动 松开  事件
    btn.onmousedown= function (event) {

        var e = event || window.event;
        var downX = e.clientX;
        //按下的坐标位置
        btn.onmousemove = function (event) {
            var moveX = event.clientX - downX;
            this.style.left = moveX + 'px';
            bg.style.left = moveX + 'px';
            if (moveX >= box.offsetwidth - btn.offsetwidth) {
                text.style.color='#fff';
                text.innerHTML='通过验证';
                btn.onmousedown=null;
                btn.onmousemove=null;
                flag=true;
            }
        }

    };
    btn.onmouseup = function () {
          btn.onmousemove=null;
          //如果到顶,就返回
          if(flag) return;
          this.style.left = 0;
          bg.style.left = 0;
          
    };
}

// $(document).ready(function(){
//     $("p").click(function(){
//         $(this).hide();
//     });
//     $(".btn").click(function(){
//         alert("this is Bill");
//     })
//});