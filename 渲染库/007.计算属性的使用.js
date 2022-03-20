const app = Vue.createApp({
    data() {
        return {
            name: 'computed使用',
            num: 1,
            error: "",

        };
    },
    /*一个属性发生变化牵扯到另外一个属性也在变化 */
    computed: {

        computedNote() {
            return this.num == 0 ?
                "不能小于0" :
                this.num == 10 ?
                "不能超过10" :
                "";
        },
        danger() {
            const t = Number(
                Math.random()
                .toString()
                .match(/^\d+(?:\.\d{0,2})?/)
            );

            return t + this.num;
        },
        error() {
            return "JS";
        },
    },
    methods: {
        methodsNote() {
            return this.num == 0 ?
                "不能小于0" :
                this.num == 10 ?
                "不能超过10" :
                "这里是methods";
        },
        //增加
        sub(event) {
            //初始为空不然一直显示
            this.error = "";
            /* 自增事件 */
            /* 到10就停了 */
            if (this.num < 10) {
                this.num++;
            } else {
                this.error = "不超过10";
            }
        },
        //减少
        des(event) {
            this.error = "";
            if (this.num > 0) {
                this.num--;
            } else {
                this.error = "不小于0";
            }
        },
    },
});
const vm = app.mount("#app");
setTimeout(() => {});