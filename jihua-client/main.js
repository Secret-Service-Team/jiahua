import Vue from 'vue'
import App from './App'


Vue.config.productionTip = false
Vue.prototype.ScanAudio = function(){
        var music = null;
        music = uni.createInnerAudioContext(); //创建播放器对象
        music.src= "https://azoux.xyz/static/todo/music/a.mp3"; //选择播放的音频
        music.play(); //执行播放
}
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
