// 响应式布局，根据不同屏幕尺寸设置字体大小
(function (doc, win) {
    let docEl = doc.documentElement
    let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    let recalc = function () {
        let clientWidth = docEl.clientWidth
        if (!clientWidth) return
        if (clientWidth > 750) {
            docEl.style.fontSize = '28px'
        } else {
            docEl.style.fontSize = (clientWidth / 375) + 'px'
        }
    }

    if (!doc.addEventListener) return
    win.addEventListener(resizeEvt, recalc, false)
    doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)