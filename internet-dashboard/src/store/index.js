
import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
    state: {
        addNewShortcut: false,
        addNewWidget: false,
        showSettings: false,
        shortcuts: []
    },
    getters: {
    },
    mutations: {
        TOGGLE_ADD_NEW_SHORTCUT(state, isVisible) {
            state.addNewShortcut = isVisible;
        },
        TOGGLE_ADD_NEW_WIDGET(state, isVisible) {
            state.addNewWidget = isVisible;
        },
        ADD_SHORTCUT(state, shortcut) {
            state.shortcuts.unshift(shortcut)
        },
        TOGGLE_SHOW_SETTINGS(state, isVisible) {
            state.showSettings = isVisible;
        }
    },
    actions: {
    },
    modules: {
    }
  });
  

