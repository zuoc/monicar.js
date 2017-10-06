var playList = $("#ulTreeList a:not([class='haveClick'])");

var currentIndex = -1;

function doAfter(targetFunc, afterFunc){
    return function(){
        var res = targetFunc(this, arguments);
        afterFunc.apply(this, arguments);
        return res;
    }
}

var playNext = function(){
    currentIndex++;
    playList[currentIndex].click();
    console.log('开始播放下一个视频 ['+ playList[currentIndex].title + ']');
}

var 就是这么屌 = function(){
    var videoTime = parseInt(CKobject.getObjectById('ckplayer_a1').getStatus()["totalTime"]);
    myRecordTime = videoTime;
    ajaxEditXxgj()
    console.log('瞬间完成 [' + playList[currentIndex].title + ']，就是这么屌！！！');
    playNext();
}

playerstop = doAfter(playerstop, playNext);

playNext();
