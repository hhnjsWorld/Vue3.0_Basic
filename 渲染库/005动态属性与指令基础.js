const app = Vue.createApp({
    data() {
        return {
            name: "万维网",
            value: "hhn",
            //让属性失效的话
            //用来做可视化比较好
            // id: undefined,
            // id: null,

            /* 根据属性发生变化 */
            n: 1,
            arg: 'id',
            hr: 'https://www.houdunren.com'
        };
    },
});

const vm = app.mount('#app')

setTimeout(() => {
    vm.name = '好好学习'
    vm.value = '大哥大',
        vm.n = 199,
        vm.arg = 'href',
        vm.hr = 'https://www.baidu.com'
}, 2000);