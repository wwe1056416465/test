layui.define(function(exports){
    rem()
    function rem(){
      
    var currentWidth=document.documentElement.offsetWidth;  // 获取到当前屏幕的宽度
    var standardWidth=1700;                                // 定义标准屏幕
    var standardSize=100;                                   // 定义标准屏下的根元素字体大小
    var currentSize=(currentWidth/standardWidth)*standardSize;   // 计算出当前屏幕下的根源素字体大小
    document.querySelector('html').style.fontSize=currentSize+'px'  // 把计算结果赋值给当前屏幕下的根源素
    window.addEventListener('resize',rem)                        // 监听屏幕的大小变化，执行以上操作
    }
    exports('rem', {})
})