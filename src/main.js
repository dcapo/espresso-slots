import Vue from 'vue';
import App from './components/App.vue';

// Extend jQuery to execute animations using animate.css
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

new Vue({
  el: 'body',
  components: { App }
});
