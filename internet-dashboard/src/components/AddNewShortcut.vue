<template>
  <div class="modal-overlay" 
    v-if="visible">

    <div class="modal" 
        ref="modal" 
        tabindex="-1">

        <div id="add-new-shortcut-form-div" 
            class="pop-up-form">

            <form class="center column" 
                @submit.prevent="submit">

                <h1>Add New Shortcut</h1>
                <div class="form-row">
                    <label for="shortcut-name"
                    >
                        Shortcut Name:
                    </label>

                    <input type="text"
                        name="shortcut-name"
                        v-model="shortcut.title"
                    >
                </div>

                <div class="form-row">
                    <label for="url"
                    >
                        Shortcut URL:
                    </label>
                    <input type="text" 
                        name="url" 
                        v-model="shortcut.URL" 
                        @input="updateFavicon"
                    >
                </div>
                <button class="submit-btn" type="submit">Submit</button>
            </form>
      </div>
    </div>
  </div>
</template>

<script>

import FavIconService from '../services/FavIconService.js'

export default {
    name: 'add-shortcuts',
    data() {
    return {
        visible: this.$store.state.addNewShortcut,
        webpageUrl: '',
        faviconUrl: '',
        shortcut: {
            title: '',
            URL: ''
        }
        };
    },
    methods: {
        show() {
        this.visible = true;

        // Get the modal element
        const modal = this.$refs.modal;

        // Calculate the top and left positions for the modal
        const top = (window.innerHeight - modal.offsetHeight) / 2;
        const left = (window.innerWidth - modal.offsetWidth) / 2;

        // Set the top and left positions for the modal
        modal.style.top = `${top}px`;
        modal.style.left = `${left}px`;

        // Focus on the modal
        modal.focus();
        },
        submit() {
        // Submit the form
        this.$store.commit('TOGGLE_ADD_NEW_SHORTCUT', false);
        console.log(this.shortcut)
        this.$store.commit('ADD_SHORTCUT', this.shortcut)
        },
    },
    computed: {
        getVisibility() {
            let v = this.$store.state.addNewShortcut 
            return v;
        }
    }
};
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  z-index: 10000;
  border-radius: 20px;
  overflow: hidden;
}

.pop-up-form {
    display: flex;
    justify-content: center;
    background-color: rgba(218, 216, 216, 0.568);
    border: solid 0.5px rgba(0, 0, 0, 0.479);
    border-radius: 20px;
    margin: 2%;
    width: 350px;
}

.center {
    text-align: center;
    width: 100%;
    align-items: center;
}

.column {
    display: flex;
    flex-direction: column;
}

.submit-btn {
    width: 30%;
    align-self: center;
    margin: 4%;
}

.form-row {
    display: flex;
    flex-direction: row;
    margin: 1%;
    justify-content: right;
    align-content: right;
    width: 100%;
    margin-right: 21%;
}

</style>