<template>
    <div class="app-wrapper" :class="{ hideSidebar: !sidebar.opened }">
        <sidebar class="sidebar-container" />
        <drawer />
        <div class="view-container">
            <navbar @toggleSideBar="toggleSideBar" />
            <app-main />
        </div>
    </div>
</template>

<script>
    import Sidebar from './Sidebar'
    import Navbar from './Navbar'
    import AppMain from './AppMain'
    import Drawer from './Drawer'

    export default {
        name: 'Layout',

        components: {
            Sidebar,
            Navbar,
            AppMain,
            Drawer
        },
        computed: {
            sidebar() {
                return this.$store.state.app.sidebar;
            }
        },

        methods: {
            toggleSideBar() {
                this.sideBarOpen = !this.sideBarOpen;
            }
        }
    }
</script>


<style lang="scss" scoped>
    .app-wrapper {
        position: relative;
        width: 100%;
        height: 100%;

        &:after {
            content: "";
            display: table;
            clear: both;
        }

        &.hideSidebar {
            .view-container {
                margin-left: 65px;
            }
        }

        .hiddenBar {
            width: 65px;
        }

        .view-container {
            min-height: 100%;
            transition: margin-left 0.28s ease-out;
            margin-left: 210px;
        }
    }
</style>
