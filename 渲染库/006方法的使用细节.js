const app = Vue.createApp({
    data() {

        return {
            name: "胡海宁",
            event: "click",
            num: 1,
            error: ""

        };
    },
    methods: {

        sub(event) {
            this.error = ''
                /* 自增事件 */
                /* 到10就停了 */
            if (this.num < 10) {
                this.num++
            } else {
                this.error = '不超过10';
            }

        },
        des(event) {
            this.error = ''
            if (this.num > 0) {
                this.num--
            } else {
                this.error = '不小于0';
            }
        },
        add(event) {
            // console.log("惊呆了老铁"),
            console.log('哈哈');

        },
        /* event被页面传参过来 */
        go(event, title) {
            /* 阻止默认行为 */
            alert(title);
            event.preventDefault();
        },
        stop(event) {
            event.preventDefault();
        },


    },

});

const vm = app.mount("#app");
setTimeout(() => {});