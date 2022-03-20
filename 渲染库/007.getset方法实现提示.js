const app = Vue.createApp({
    data() {
        return {
            name: "get和set",

            num: 1,

            tip: ''
        };
    },
    computed: {
        /* 利用get、set的方法 */
        gs: {
            get() {
                const message = this.num == 0 ? 'get不小于0' : this.num == 10 ? 'get不超过10' : ''
                if (message) return this.tip + message
            },
            set(tip) {
                this.tip = tip
                console.log(tip);
            },
        },
    },
    methods: {


        //增加
        sub(event) {
            //初始为空不然一直显示
            this.gs = "提示";
            /* 自增事件 */
            /* 到10就停了 */
            if (this.num < 10) {
                this.num++;
            }
        },
        //减少
        des(event) {
            this.gs = "警告";
            if (this.num > 0) {
                this.num--;
            }
        },
    },
}, );
const vm = app.mount("#app");
setTimeout(() => {});