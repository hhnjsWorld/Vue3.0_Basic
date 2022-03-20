const app = Vue.createApp({
    data() {
        return {
            name: 'watch',
            num: 1,
            error: ""
        };
    },
    watch: {
        //检测到了num
        num(newValue, oldValue) {
            // alert('新值' + newValue)
            // console.log("旧值" + oldValue);
            this.error = newValue == 0 ? '不能小于0' : newValue == 10 ? '不能大于10' : ''
        }
    },
    methods: {
        //增加
        sub(event) {
            //初始为空不然一直显示
            // this.error = ''
            /* 自增事件 */
            /* 到10就停了 */
            if (this.num < 10) {
                this.num++
            }
            /* else {
                           this.error = '不超过10';
                       } */
        },
        //减少
        des(event) {
            // this.error = ''
            if (this.num > 0) {
                this.num--
            }
            /*  else {
                            this.error = '不小于0';
                        } */
        },
        //阻止默认行为

    },
});
const vm = app.mount("#app");
setTimeout(() => {});