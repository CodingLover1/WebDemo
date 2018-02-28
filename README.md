### webdemo

> 这是一个用来记录前端知识学习代码的，包括js的各种知识。知识点都在代码中并添加有注释。

#### 定时器的使用

```
 setTimeout(print,1000);
        var i=0;
        function print(){
            console.log(i++);
        }

        function invoke(f,start,interval,end){
            if(!start) 
                start=0;
            if(arguments.length<=2){
                setTimeout(f,start);
            }
            else{
                setTimeout(repeat,start);
                function repeat(){
                    var h=setInterval(f,interval);
                    if(end)
                        setTimeout(function(){clearInterval(h);},end);
                }
            }
        }
        
       // invoke(print,1000,2000,10000);

```

#### 浏览器定位和导航

```
        console.log(window.location);
        console.log(typeof window.location);
        console.log(window.location.href);
        console.log(typeof window.location.href);
        console.log(window.location.protocol);
        console.log(window.location.host);
        console.log(window.location.hostname);
        console.log(window.location.pathname);
        console.log(window.location.search);

```

#### js对象操作

```
//通过对对象进行||运算，如果对象为undefined则置初值
var a1=123;
var a2=a1||"123";
console.log(a2);
console.log(typeof a2);
console.log(typeof cccc); //undefined;
var cc=null;
console.log(typeof cc);
var student1={}; //通过初始一个空对象，然后在添加属性
student1.name="ws";
student1.age=22;
console.log(student1);

```

#### 浏览历史

```
  console.log(window.history);
  //window.history.back();  //后退
  //window.history.forward(); //前进
  //window.history.go(num); //后退或前进num个历史记录

```


#### 浏览器和屏幕信息

```
  console.log(navigator.appName);
  console.log(navigator.appVersion+" ----"+navigator.userAgent+" ---"+navigator.platform);
  console.log(screen.width+":"+screen.height);
  console.log(screen.availWidth+":"+screen.availHeight);
  console.log(window.parent);

```

