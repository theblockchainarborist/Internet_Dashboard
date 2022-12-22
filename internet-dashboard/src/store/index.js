
import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
    state: {
        addNewShortcut: false
    },
    getters: {
    },
    mutations: {
        TOGGLE_ADD_NEW_SHORTCUT(state, isVisible) {
            state.addNewShortcut = isVisible;
        }
    },
    actions: {
    },
    modules: {
    }
  });
  

