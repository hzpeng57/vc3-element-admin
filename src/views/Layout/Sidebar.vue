<template>
    <el-menu
        class="sidebar-container el-menu-vertical-demo"
        :collapse="isCollapse"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
            </template>
            <router-link :to="'/dashboard'">
                <el-menu-item index="1-1">
                    dashboard
                </el-menu-item>
            </router-link>

            <router-link :to="'/page1'">
                <el-menu-item index="1-2">
                    page1
                </el-menu-item>
            </router-link>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航二</span>
            </template>
            <router-link :to="'/page2'">
                <el-menu-item index="2-1">
                    page2
                </el-menu-item>
            </router-link>

            <router-link :to="'/page3'">
                <el-menu-item index="2-2">
                    page3
                </el-menu-item>
            </router-link>
        </el-submenu>
    </el-menu>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'Sidebar',
        computed: {
            ...mapGetters([
                'sidebar'
            ]),
            isCollapse() {
                return !this.sidebar.opened
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sidebar-container {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        height: 100%;
        z-index: 999;
        overflow-y: auto;
        &::-webkit-scrollbar {
            display: none
        }
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
    }

    a {
        text-decoration: none;
    }
</style>
