const string = `
你好，让我来给你画一个皮卡丘吧！
首先准备一个皮卡丘的身体
.result{
  background-color: rgb(255,230,0);
  min-height: 50vh;
  min-width: 100vw;
  position: relative;
}
.pikachu{
  position: absolute;
  height: 235px;
  width: 420px;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
然后画皮卡丘的两只眼睛
.eye{
  position: absolute;
  height: 63px;
  width: 63px;
  border: 3px solid black;
  border-radius: 50%;
  background-color: black;
}
.eye.left{
  margin-left: 60px;
}
.eye.right{
  right: 0;
  margin-right: 60px;
}
眼睛上加一点高光
.eye::after{
  content: '';
  display: block;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  width: 31px;
  height: 31px;
  border: 3px solid black;
  margin-left: 7px;
  margin-top: -2px;
}
然后画一个鼻子
.nose{
  position: absolute;
  border-top: 10px solid black;
  border-bottom: 10px solid  rgb(255,230,0);
  border-left: 10px solid  rgb(255,230,0);
  border-right: 10px solid  rgb(255,230,0);
  left: 50%;
  transform: translate(-50%);
  margin-top: 38px;
}
.nose::before{
  content: '';
  display: block;
  position: absolute;
  border: 8px solid black;
  background-color: black;
  border-radius: 0 100%;
  margin-top: -18px;
  transform: translate(-50%) rotate(-45deg);
}
接下来画上嘴唇
.lip{
  position: absolute;
  border: 2px solid black;
  left: 50%;
  transform: translate(-50%);
  overflow: hidden;
  font-size: 0;
}
.lip.left{
  position: absolute;
  width: 100px;
  height: 20px;
  border-bottom-left-radius: 40px 25px;
  border-top: none;
  border-right: none;
  background-color: rgb(255,230,0);
  transform: translate(-98px,70px) rotate(-13deg);
  z-index: 10;
}
.lip.right{
  position: absolute;
  width: 100px;
  height: 20px;
  border-bottom-right-radius: 40px 25px;
  border-top: none;
  border-left: none;
  background-color: rgb(255,230,0);
  left: 50%;
  transform: translate(-2px,70px) rotate(13deg);
  z-index: 10;
}
把嘴巴也画出来
.mouth{
  position: absolute;
  width: 200px;
  height: 158px;
  left: 50%;
  bottom: 0;
  transform: translate(-50%);
  overflow: hidden;
}
.tongue{
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  width: 200px;
  height: 808px;
  bottom: 0;
  border: 3px solid black;
  background-color: rgb(155,0,10);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  overflow: hidden;
}
.tongue::after{
  content: '';
  display: block;
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translate(-50%);
  width: 140px;
  height: 140px;
  background-color: rgb(255,72,95);
  border-radius: 50%;
}
最后加上两点腮红
.face{
  position: absolute;
  border: 3px solid black;
  background-color: red;
  height: 88px;
  width: 88px;
  border-radius: 50%;
  top: 110px;
}
.face.right{
  right: 0;
}
一只可爱的皮卡丘完成了
`
export default string;