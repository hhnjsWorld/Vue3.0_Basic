const app = Vue.createApp({
    data() {
        return {
            name: '胡海宁',
            /*  */
            html: `<div style="color:green" onclick = "alert('大哥')">hhn.com</div>`
        }
    },
});

/* 挂载之后得到根组件实例 */
const vm = app.mount('#app')

// console.log(vm.$data.name);

setTimeout(() => {
    vm.$data.name = '大帅哥'
}, 3000)