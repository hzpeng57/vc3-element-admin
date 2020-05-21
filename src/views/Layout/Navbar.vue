<template>
    <el-menu class="navbar" mode="horizontal">
        <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
        <levelbar></levelbar>
        <div class="nav-right">
            <el-dropdown size="medium" class="dropdown-box" @command="clickDropDown">
                <span class="el-dropdown-link">
                    <el-avatar
                        shape="circle"
                        :size="35"
                        fit="contain"
                        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                        alt="头像"
                    ></el-avatar>
                    <span class="username">Admin</span>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="setting">设置</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>


        </div>
    </el-menu>
</template>

<script>
    import Hamburger from '../../components/Hamburger';
    import Levelbar from './Levelbar';
    import { mapGetters } from 'vuex'

    export default {
        name: 'Navbar',
        components: {
            Hamburger,
            Levelbar
        },
        computed: {
            ...mapGetters([
                'sidebar'
            ])
        },
        methods: {
            toggleSideBar() {
                this.$store.dispatch('ToggleSideBar');
            },

            clickDropDown(val) {
                if (val === 'setting') {
                    this.$store.dispatch('ToggleDrawer', true);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .navbar {
        height: 50px;
        line-height: 50px;

        .hamburger-container {
            line-height: 58px;
            height: 50px;
            float: left;
            padding: 0 10px;
        }

        .nav-right {
            float: right;
            height: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 0 20px;

            .username {
                margin-left: 10px;
            }
            .el-dropdown-link {
                display: flex;
                justify-content: flex-end;
                align-items: center;
            }
        }
    }

</style>
