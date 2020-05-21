<template>
    <svg t="1589881837668" @click="toggleClick" class="wscn-icon hamburger" :class="{'is-active':isActive}"
         viewBox="0 0 1333 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1835" width="32" height="32">
        <path
            d="M1102.502 907.508h-941.859c-24.402 0-44.149-20.538-44.149-45.99s19.748-45.99 44.149-45.99h941.859c24.402 0 44.149 20.538 44.149 45.99s-19.748 45.99-44.149 45.99zM1102.502 557.99h-941.859c-24.402 0-44.149-20.538-44.149-45.99s19.748-45.99 44.149-45.99h941.859c24.402 0 44.149 20.538 44.149 45.99s-19.748 45.99-44.149 45.99zM1102.502 208.47h-941.859c-24.402 0-44.149-20.539-44.149-45.99s19.748-45.99 44.149-45.99h941.859c24.402 0 44.149 20.538 44.149 45.99s-19.748 45.99-44.149 45.99z"
            fill="#545c64" p-id="1836"></path>
    </svg>
</template>

<script>
    export default {
        name: 'hamburger',
        props: {
            isActive: {
                type: Boolean,
                default: false
            },
            toggleClick: {
                type: Function,
                default: null
            }
        }
    }
</script>

<style scoped>
    .hamburger {
        display: inline-block;
        cursor: pointer;
        transform: rotate(0deg);
        transition: .38s;
        transform-origin: 50% 50%;
        outline: none;
    }

    .hamburger.is-active {
        transform: rotate(90deg);
    }

</style>
