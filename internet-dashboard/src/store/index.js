
import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
    state: {
        addNewShortcut: false,
        shortcuts: []
    },
    getters: {
    },
    mutations: {
        TOGGLE_ADD_NEW_SHORTCUT(state, isVisible) {
            state.addNewShortcut = isVisible;
        },
        ADD_SHORTCUT(state, shortcut) {
            state.shortcuts.unshift(shortcut)
        }
    },
    actions: {
    },
    modules: {
    }
  });
  

