## webdemo

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

#### jQuery 选取元素对象

* $(this)
* $("#id")
* $(".class")
* $("tagName")
* $("tagName[attr='value']")

#### jQuery 设置css

* $(selector).css("attr","val");
* $(selector).css({"attr":"val","attr2":"val2"});

#### jQuery 设置事件

* $(selector).click(function(){});
* $(selector).dbclike(function);
* $(selector).focus(function);
* $(selector).blur(function);
* $(selector).mouseover(function);
* $(selector).keydown(function);
* $(selector).keyup(function);
* $(selector).keypress(function);


#### html元素对象节点
* parentNode
* childNodes
* firstChild,lastChild
* nextSlibing,previousSibling //前一个兄弟节点和后一个兄弟节点
* nodeType //9 Document节点 8 Comment 3 Text 1 Element
* nodeValue //Text Comment节点的文本内容
* nodeName 

```
 $("p")[0].parentNode

```

#### html元素属性

* getAttribute("attrname"),setAttribute("attrname","value") //获取或设置元素属性

* 通过Element对象的attributes属性获取

* jQuery通过attr("attrname")获取

```
document.body.attributes[0];
document.body.attributes.bgcolor;
document.body.attributes["ONLOAD"]

```

* 数据集属性(在不违反html规范的情况下自定义属性)
> 在html5中任意以“data-"为前缀的小写的属性都是合法的
> html5还在Element对象上定义了dataset属性，dataset的各个属性对应去掉前缀的data-属性，比如dataset.x 对应data-x属性

```
<span class="sparkline" data-ymin="0" data-ymax="10">

</span>

var sparkline=document.getElementsByClassName("sparkline");
for(var i=0;i< sparkine.length;i++){
    var dataset=sparkline[i].dataset;
    var ymin=dataset.ymin;
}

```

#### 元素内容

* textContent  //包括子节点的纯文本内容
* innerText   //和textContent的区别是innerText不会包括script标签中的文本内容
* innerHTML  //以html字符串的形式返回元素的内容

```
<p>this is a <span>span</span>test<script>/*hello*/</script></p>

console.log($("p")[0].textContent); //this is a spantest/*hello*/
console.log($("p")[0].innerText); //this is a spantest
console.log($("p")[0].innerHTML);//this is a <span>span</span>test<script>/*hello*/</script>

```





