const app = Vue.createApp({
    data() {
        return {
            name: '根组件-父亲'
        }
    },

    /* 自定义了模板 这个div里面插入hhn即可 */
    template: `
    <div>{{name}} - <hhn\></div>

    `
})



/* 创建孩子 */
app.component('hhn', {
    data() {
        return {
            name: '子'
        }
    },
    template: `
    <div>{{name}}</div>

    `
})
const vm = app.mount('#app')
    // console.log(vm.name);