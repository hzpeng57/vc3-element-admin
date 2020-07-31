import Vue from 'vue';
import Dialog from "@/components/Dialog/Dialog";

let vm;
const noop = () => {};

function createVNode(resolve = noop, reject = noop, props) {
    return new Vue({
        mixins: [{
            mounted() {
                document.body.appendChild(this.$el);
            },
            beforeDestroy() {
                document.body.removeChild(this.$el);
            },
        }],
        beforeDestroy() {
            vm = null;
        },

        methods: {
            confirm() {
                resolve('点击确认');
                this.$destroy();
            },
            close() {
                reject('点击关闭');
                this.$destroy();
            }
        },
        render(createElement) {
            return createElement(Dialog, {
                on: {
                    confirm: this.confirm,
                    close: this.close
                },
                props,
                style: {
                    color: 'red'
                },
            });
        }
    })
}

export default {
    show(props) {
        return new Promise((resolve, reject) => {
            if (vm) {
                vm.$destroy();
            }
            vm = createVNode(resolve, reject, props);
            vm.$mount();
        })
    }
}