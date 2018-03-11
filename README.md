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

> jQuery对象和DOM对象（通过document.getElementById类似的获取的对象）是有区别的，jQuery对象可以执行jQuery方法不能执行DOM对象的方法，通过jQuery获取的对象可以调用get(0)函数，将jQuery对象转成DOM对象

* $(this)
* $("#id")
* $(".class")
* $("tagName")
* $("tagName[attr='value']")

<table class="dataintable">
<tbody><tr>
<th>选择器</th>
<th>实例</th>
<th>选取</th>
</tr>

<tr>
<td><a href="/jquery/selector_all.asp" title="jQuery * 选择器">*</a></td>
<td>$("*")</td>
<td>所有元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_id.asp" title="jQuery # 选择器">#<i>id</i></a></td>
<td>$("#lastname")</td>
<td>id="lastname" 的元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_class.asp" title="jQuery . 选择器">.<i>class</i></a></td>
<td>$(".intro")</td>
<td>所有 class="intro" 的元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_element.asp" title="jQuery element 选择器"><i>element</i></a></td>
<td>$("p")</td>
<td>所有 &lt;p&gt; 元素</td>
</tr>

<tr>
<td>.<i>class</i>.<i>class</i></td>
<td>$(".intro.demo")</td>
<td>所有 class="intro" 且 class="demo" 的元素</td>
</tr>

<tr>
<td style="background-color:#fff;">&nbsp;</td>
<td style="background-color:#fff;">&nbsp;</td>
<td style="background-color:#fff;">&nbsp;</td>
</tr>

<tr>
<td><a href="/jquery/selector_first.asp" title="jQuery :first 选择器">:first</a></td>
<td>$("p:first")</td>
<td>第一个 &lt;p&gt; 元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_last.asp" title="jQuery :last 选择器">:last</a></td>
<td>$("p:last")</td>
<td>最后一个 &lt;p&gt; 元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_even.asp" title="jQuery :even 选择器">:even</a></td>
<td>$("tr:even")</td>
<td>所有偶数 &lt;tr&gt; 元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_odd.asp" title="jQuery :odd 选择器">:odd</a></td>
<td>$("tr:odd")</td>
<td>所有奇数 &lt;tr&gt; 元素</td>
</tr>

<tr>
<td style="background-color:#fff;">&nbsp;</td>
<td style="background-color:#fff;">&nbsp;</td>
<td style="background-color:#fff;">&nbsp;</td>
</tr>

<tr>
<td><a href="/jquery/selector_eq.asp" title="jQuery :eq() 选择器">:eq(<i>index</i>)</a></td>
<td>$("ul li:eq(3)")</td>
<td>列表中的第四个元素（index 从 0 开始）</td>
</tr>

<tr>
<td><a href="/jquery/selector_gt.asp" title="jQuery :gt 选择器">:gt(<i>no</i>)</a></td>
<td>$("ul li:gt(3)")</td>
<td>列出 index 大于 3 的元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_lt.asp" title="jQuery :lt 选择器">:lt(<i>no</i>)</a></td>
<td>$("ul li:lt(3)")</td>
<td>列出 index 小于 3 的元素</td>
</tr>

<tr>
<td>:not(<i>selector</i>)</td>
<td>$("input:not(:empty)")</td>
<td>所有不为空的 input 元素</td>
</tr>

<tr>
<td style="background-color:#fff;">&nbsp;</td>
<td style="background-color:#fff;">&nbsp;</td>
<td style="background-color:#fff;">&nbsp;</td>
</tr>

<tr>
<td><a href="/jquery/selector_header.asp" title="jQuery :header 选择器">:header</a></td>
<td>$(":header")</td>
<td>所有标题元素 &lt;h1&gt; - &lt;h6&gt;</td>
</tr>

<tr>
<td><a href="/jquery/selector_animated.asp" title="jQuery :animated 选择器">:animated</a></td>
<td>&nbsp;</td>
<td>所有动画元素</td>
</tr>

<tr>
<td style="background-color:#fff;">&nbsp;</td>
<td style="background-color:#fff;">&nbsp;</td>
<td style="background-color:#fff;">&nbsp;</td>
</tr>

<tr>
<td><a href="/jquery/selector_contains.asp" title="jQuery :contains 选择器">:contains(<i>text</i>)</a></td>
<td>$(":contains('W3School')")</td>
<td>包含指定字符串的所有元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_empty.asp" title="jQuery :empty 选择器">:empty</a></td>
<td>$(":empty")</td>
<td>无子（元素）节点的所有元素</td>
</tr>

<tr>
<td>:hidden</td>
<td>$("p:hidden")</td>
<td>所有隐藏的 &lt;p&gt; 元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_visible.asp" title="jQuery :visible 选择器">:visible</a></td>
<td>$("table:visible")</td>
<td>所有可见的表格</td>
</tr>

<tr>
<td style="background-color:#fff;">&nbsp;</td>
<td style="background-color:#fff;">&nbsp;</td>
<td style="background-color:#fff;">&nbsp;</td>
</tr>

<tr>
<td>s1,s2,s3</td>
<td>$("th,td,.intro")</td>
<td>所有带有匹配选择的元素</td>
</tr>

<tr>
<td style="background-color:#fff;">&nbsp;</td>
<td style="background-color:#fff;">&nbsp;</td>
<td style="background-color:#fff;">&nbsp;</td>
</tr>

<tr>
<td><a href="/jquery/selector_attribute.asp" title="jQuery [attribute] 选择器">[<i>attribute</i>]</a></td>
<td>$("[href]")</td>
<td>所有带有 href 属性的元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_attribute_equal_value.asp" title="jQuery [attribute=value] 选择器">[<i>attribute</i>=<i>value</i>]</a></td>
<td>$("[href='#']")</td>
<td>所有 href 属性的值等于 "#" 的元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_attribute_notequal_value.asp" title="jQuery [attribute!=value] 选择器">[<i>attribute</i>!=<i>value</i>]</a></td>
<td>$("[href!='#']")</td>
<td>所有 href 属性的值不等于 "#" 的元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_attribute_end_value.asp" title="jQuery [attribute$=value] 选择器">[<i>attribute</i>$=<i>value</i>]</a></td>
<td>$("[href$='.jpg']")</td>
<td>所有 href 属性的值包含以 ".jpg" 结尾的元素</td>
</tr>

<tr>
<td style="background-color:#fff;">&nbsp;</td>
<td style="background-color:#fff;">&nbsp;</td>
<td style="background-color:#fff;">&nbsp;</td>
</tr>

<tr>
<td><a href="/jquery/selector_input.asp" title="jQuery :input 选择器">:input</a></td>
<td>$(":input")</td>
<td>所有 &lt;input&gt; 元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_input_text.asp" title="jQuery :text 选择器">:text</a></td>
<td>$(":text")</td>
<td>所有 type="text" 的 &lt;input&gt; 元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_input_password.asp" title="jQuery :password 选择器">:password</a></td>
<td>$(":password")</td>
<td>所有 type="password" 的 &lt;input&gt; 元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_input_radio.asp" title="jQuery :radio 选择器">:radio</a></td>
<td>$(":radio")</td>
<td>所有 type="radio" 的 &lt;input&gt; 元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_input_checkbox.asp" title="jQuery :checkbox 选择器">:checkbox</a></td>
<td>$(":checkbox")</td>
<td>所有 type="checkbox" 的 &lt;input&gt; 元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_input_submit.asp" title="jQuery :submit 选择器">:submit</a></td>
<td>$(":submit")</td>
<td>所有 type="submit" 的 &lt;input&gt; 元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_input_reset.asp" title="jQuery :reset 选择器">:reset</a></td>
<td>$(":reset")</td>
<td>所有 type="reset" 的 &lt;input&gt; 元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_input_button.asp" title="jQuery :button 选择器">:button</a></td>
<td>$(":button")</td>
<td>所有 type="button" 的 &lt;input&gt; 元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_input_image.asp" title="jQuery :image 选择器">:image</a></td>
<td>$(":image")</td>
<td>所有 type="image" 的 &lt;input&gt; 元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_input_file.asp" title="jQuery :file 选择器">:file</a></td>
<td>$(":file")</td>
<td>所有 type="file" 的 &lt;input&gt; 元素</td>
</tr>

<tr>
<td style="background-color:#fff;">&nbsp;</td>
<td style="background-color:#fff;">&nbsp;</td>
<td style="background-color:#fff;">&nbsp;</td>
</tr>

<tr>
<td><a href="/jquery/selector_input_enabled.asp" title="jQuery :enabled 选择器">:enabled</a></td>
<td>$(":enabled")</td>
<td>所有激活的 input 元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_input_disabled.asp" title="jQuery :disabled 选择器">:disabled</a></td>
<td>$(":disabled")</td>
<td>所有禁用的 input 元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_input_selected.asp" title="jQuery :selected 选择器">:selected</a></td>
<td>$(":selected")</td>
<td>所有被选取的 input 元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_input_checked.asp" title="jQuery :checked 选择器">:checked</a></td>
<td>$(":checked")</td>
<td>所有被选中的 input 元素</td>
</tr>
</tbody></table>

#### jQuery 设置css

* $(selector).css("attr","val");
* $(selector).css({"attr":"val","attr2":"val2"});
* $(selector).addClass("classname") 
* $(selector).removeClass("classname");
* $(selector).toggleClass("classname"); //切换css 类
* $(selector).hasClass("classname"); 
* $(selector).is(".classname"); //检测css类

#### jQuery 设置事件

* $(selector).click(function(){});
* $(selector).dbclike(function);
* $(selector).focus(function);
* $(selector).blur(function);
* $(selector).mouseover(function);
* $(selector).keydown(function);
* $(selector).keyup(function);
* $(selector).keypress(function);
* submit()
* preventDefault() 
* stopPropagation() //阻止事件冒泡

#### 事件处理程序的高级注册
* $(target).bind("eventname",function);
* $(target).unbind("eventname");

#### 实时事件
> 比如给所有的a元素调用bind()函数绑定了事件，如果又创建了新的a元素，则新的a元素不会拥有之前绑定的事件。通常在documet对象上调用delegate()函数

* $(document).delegate("a","mouseover",linkHandler);

```
 $("<img/>",{src:"images/headPicture.jpg",
                alt:"picture load fail",
                width:"100%",
                height:"100%",
                click:function(){alert("yes");}
    }).appendTo("#div1");

```


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

* jQuery调用html()函数等价于innerHTML返回内容,text()函数等价于textContetn


```
<p>this is a <span>span</span>test<script>/*hello*/</script></p>

console.log($("p")[0].textContent); //this is a spantest/*hello*/
console.log($("p")[0].innerText); //this is a spantest
console.log($("p")[0].innerHTML);//this is a <span>span</span>test<script>/*hello*/</script>

```

#### jQuery修改文档结构
##### $(target).method(content)
* $(selector).append(htmlstring)  //在元素内容结尾处添加
* $(selector).prepend(htmlstring) //在元素内容起始处添加
* $(selector).after() //在元素后添加
* $(selector).before() //在元素前添加
* $(selector).replaceWith() //替换元素

##### $(content).method(target)
* appendTo();
* prependTo();
* insertAfter();
* insertBefore();
* replaceAll();
* empty() //清空所有子元素
* remove() //删除当前元素


```
$("a").clone().appendTo("#linkList");

```


#### jQuery中的Ajax

$.ajax({
    url: "#",
    type: "GET",
    data: null,  //这是发个服务器的数据
    dataType:"script", //这是客户端期待收到的服务器端响应的数据类型
    success:callback,
    error:callback
});

dataType的值可以为一下几种：
* "text" "html" "script" "json" "jsonp" "xml"

ajax 另外的一些选项
* contentType   指定请求的HTTP Content-Type 头
* timeou 超时时间，单位是毫秒，如果设置了该选项，当请求没有在指定超时时间内完成就会取消请求同时触发error回调，回调中的状态码参数为“timeout”

* $.each(data,function(key,val)) //遍历对象

#### JavaScript定义类的方式
```javascript

//对象工厂方式，每次调用这个函数，都会创建一个showColor函数对象，不好
        function Car(color){
            var obj=new Object();
            obj.color=color;
            obj.showColor=function(){
                document.write(obj.color);
            }
            return obj;
        }


        //构造函数,同工厂方式一样，每次都会创建showColor函数对象
        function Car(color){
            this.color=color;
            this.showColor=function(){
                document.write(this.color);
            }
        }

        //原型方式,必须使用new,由于原型中存放的是对象的引用，所以当一个对象
        //修改了某个对象属性后，其他的对象的该属性也会被修改。
        function Car(color){
            Car.prototype.color=color;
            Car.prototype.arr=["red","blue"];
            Car.prototype.showColor=function(){
                document.write(this.color);
            }
        }

        //联合方式，用构造函数来创建非函数属性，用原型来创建函数属性

        function Car(color){
            this.color=color;
            this.arr=["red","blue"];
            Car.prototype.showColor=function(){
                alert(this.color);
            }
        }

        //动态原型方式
        function Car(color){
            this.color=color;
            this.arr=new Array("red","blue");
            if(typeof Car.__initialized__ == "undefined"){
                Car.prototype.showColor=function(){
                    alert(this.color);
                }
                Car.__initialized__=true;
            }
        }
```

#### CSS位置
* position:relative 相对定位，让元素相对于自己原来的位置，进行位置调整，

* position:absolute 绝对定位，如果以top left来移动元素，那么参考点为页面的左上角，如果以bottom left来移动元素，参考点为浏览器窗口的左下角，而不是整个body的左下角。使用绝对定位，元素就脱离了整个文档流。如果将某个祖先元素设置为relative,那么绝对定位会以祖先元素作为参考标准。

* position:fixed 固定定位，以浏览器窗口作为参考对象，始终保持在屏幕的某个位置。

#### js，css 实现弹出对话框并居中
```html

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Overlay Demo</title>
    <style>
        /*Your code here*/
        #dialog{
            width:400px;
            height:300px;
            background-color:#ffffff;
            display:none;
            z-index:1001;
            /*实现居中*/
            position: absolute;
            left:50%;
            top:50%;
            margin-top:-150px;
            margin-left:-200px;
        }
        #cover{
            position:absolute;
            left:0px;
            top:0px;
            width:100%;
            height:100%;
            background-color:rgba(0,0,0,.7);
            display: none;
            z-index:1000;
        }

    </style>
</head>

<body>
    <h1>Overlay Demo</h1>
    <button onclick="showDialog()">弹出框</button>

    <div id="dialog">
        <div id="title">
            标题<a href="javascript:void(0)" onclick="heiddenDialog()" style="float:right;">X</a>
        </div>
        <div id="content">
            内容
        </div>
    </div>
    <!-- 遮罩层 -->
    <div id="cover"></div>

    <script>
        function showDialog(){
            document.getElementById("cover").style.display="block";
            document.getElementById("dialog").style.display="block";
        }

        function heiddenDialog(){
            document.getElementById("cover").style.display="none";
            document.getElementById("dialog").style.display="none";
        }
    </script>
</body>
</html>


```