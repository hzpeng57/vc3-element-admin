<template>
    <el-drawer
        title="设置"
        :visible.sync="drawer"
        size="20%"
        :before-close="beforeClose"
    >
        <div class="drawer-con">
            <el-divider content-position="left">设置主题</el-divider>
            <theme-picker @change="themeChange"/>
        </div>
    </el-drawer>
</template>

<script>
    import ThemePicker from 'components/ThemePicker'

    export default {
        name: 'Drawer',
        data() {
            return {
                drawer: false
            }
        },

        computed: {
            storeDrawer() {
                return this.$store.state.app.drawer;
            }
        },

        watch: {
            storeDrawer(newVal) {
                this.drawer = newVal;
            }
        },

        components: {
            ThemePicker
        },

        methods: {
            themeChange(val) {
                this.$store.dispatch('ChangeTheme', val);
            },

            beforeClose(done) {
                this.$store.dispatch('ToggleDrawer', false);
                done();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .drawer-con {
        padding: 20px;
    }
</style>
