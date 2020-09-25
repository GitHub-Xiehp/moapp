(function (doc, win) {
   var docEl = doc.documentElement,
  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
  recalc    = function () {
         var clientWidth = docEl.clientWidth;
         if (clientWidth>=640) {
            clientWidth = 640;
         };
         if (!clientWidth) return;
       docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
  };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

// X:{}里面内容是一个封闭空间,有人引入这个js文件,自我执行;


//X:此页面整体代码是在非模块环境下使用的,有人引入这个js文件,自我执行;
