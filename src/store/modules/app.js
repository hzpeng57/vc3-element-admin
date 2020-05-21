import Cookies from 'js-cookie';
const app = {
    state: {
        sidebar: {
            opened: !+Cookies.get('sidebarStatus')
        },
        theme: Cookies.get('theme'),
        drawer: false
    },
    mutations: {
        TOGGLE_SIDEBAR: state => {
            if (state.sidebar.opened) {
                Cookies.set('sidebarStatus', 1);
            } else {
                Cookies.set('sidebarStatus', 0);
            }
            state.sidebar.opened = !state.sidebar.opened;
        },
        CHANGE_THEME: (state, theme) => {
            state.theme = theme;
            Cookies.set('theme', theme);
        },
        TOGGLE_DRAWER: (state, flag) => {
            state.drawer = flag;
        }
    },
    actions: {
        ToggleSideBar: ({ commit }) => {
            commit('TOGGLE_SIDEBAR')
        },

        ChangeTheme: ({ commit }, theme) => {
            commit('CHANGE_THEME', theme)
        },

        ToggleDrawer: ({ commit }, flag) => {
            commit('TOGGLE_DRAWER', flag)
        }
    }
};

export default app;
