//下面是代码1
var can = document.getElementById("canvas");
var ctx = can.getContext("2d");
var w = can.width = window.innerWidth;
var h = can.height = window.innerHeight;
var interval = 20;
window.onresize = function() {
  //随时改变宽高，不出滚动条
  w = can.width = window.innerWidth;
  h = can.height = window.innerHeight;
};
var sum = 1000; //雪花个数
var p = []; //存储每个雪花粒子的绘制的起始位置
for (var i = 0; i < sum; i++) {
  p.push({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 3,
    v: (Math.random() * 5 + 2) / interval
  });
}

function draw() {

  ctx.beginPath();
  ctx.fillStyle = "#fff";
  for (var i = 0; i < sum; i++) {
    ctx.moveTo(p[i].x, p[i].y); //画布挪到画的起始位置
    ctx.arc(p[i].x, p[i].y, p[i].r, 0, 2 * Math.PI, false);
  }
  ctx.fill();
  changeY();
   changeX();
}

function changeY() {
  for (var i = 0; i < sum; i++) {
    if (p[i].r < 1.5) {
      p[i].y += p[i].v;
    } else {
      p[i].y += p[i].v * 1.4;
    }

    if (p[i].y > h) {
      p[i].y = 0;
    }
  }
}
//增加了向右的斜的
function changeX(){
  for (var i = 0; i < sum; i++) {
    if (p[i].r < 1.5) {
      p[i].x += (p[i].v*0.3 - (Math.random()*0.15)) ;
    } else {
      p[i].x += p[i].v * 1.4*0.3;
    }

    if (p[i].x > w) {
      p[i].x = 0;
    }
  }
}
// function changeX(){
//   for (var i = 0; i < sum; i++) {
//     if (p[i].r < 1.5) {
//       p[i].x += p[i].v*0.3;
//     } else {
//       p[i].x += p[i].v * 1.4*0.3;
//     }

//     if (p[i].x > w) {
//       p[i].x = 0;
//     }
//   }
// }

setInterval(function() {
  ctx.clearRect(0, 0, w, h);
  draw();
}, interval);

//这是我卡顿的代码
// var can = document.getElementById("canvas");
// var ctx = can.getContext("2d");
// var w = can.width = window.innerWidth;
// var h = can.height = window.innerHeight;
// window.onresize = function() {
//   //随时改变宽高，不出滚动条
//   w = can.width = window.innerWidth;
//   h = can.height = window.innerHeight;
// };
// var sum = 1000; //雪花个数
// var p = []; //存储每个雪花粒子的绘制的起始位置
// for (var i = 0; i < sum; i++) {
//   p.push({
//     x: Math.random() * w,
//     y: Math.random() * h,
//     r: Math.random() * 3
//   });
// }

// function draw() {

//   ctx.beginPath();
//   ctx.fillStyle = "#fff";
//   for (var i = 0; i < sum; i++) {
//     ctx.moveTo(p[i].x, p[i].y); //画布挪到画的起始位置
//     ctx.arc(p[i].x, p[i].y, p[i].r, 0, 2 * Math.PI, false);
//   }
//   ctx.fill();
//   changeY();
// }


// function changeY() {
//   for (var i = 0; i < sum; i++) {
//     p[i].y += Math.random() * 10;
//     if (p[i].y > h) {
//       p[i].y = 0;
//     }
//   }
// }
// setInterval(function() {
//   ctx.clearRect(0, 0, w, h);
//   draw();
// }, 70);

















//下面是笔记阿
// 函数调用draw();事件调用
//绘制矩形,每绘制一个图形，都要beginPath一下
// ctx.beginPath();
// ctx.lineWidth = 10;
// ctx.strokeRect(100,100,100,100);//空心矩形 位置，宽高

// ctx.beginPath();
// ctx.arc(250,250,50,0,2*Math.PI,false);//坐标，半径，开始度数，结束度数
// ctx.strokeStyle = "blue";
// ctx.lineWidth = 10;
// ctx.stroke();//绘制空心圆
// ctx.fillStyle ="red";
// ctx.fill();//填充一个实心圆