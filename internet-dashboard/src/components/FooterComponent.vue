<template>
    <div id="footer-main-div" class="footer">
        <div id="add-link-div" class="footer-item" v-on:click="addNewShortcut">
            Add Shortcut
        </div>
        <div id="add-widget-div" class="footer-item" v-on:click="addNewWidget" >
            Add Widgets
        </div>
        <div id="settings-div" class="footer-item" v-on:click="showSettingsMenu" >
            Settings
        </div>
    </div>
</template>

<script>


export default {
    name: 'footer',
    data() {
    },
    methods: {
        addNewShortcut() {
            this.$store.commit('TOGGLE_ADD_NEW_SHORTCUT', true);
        },
        addNewWidget() {
            this.$store.commit('TOGGLE_ADD_NEW_WIDGET', true);
        },
        showSettingsMenu() {
            this.$store.commit('TOGGLE_SHOW_SETTINGS', true);
        }
    }
}
</script>

<style>

.footer {
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2.5em;
    justify-content: right;
}

.footer-item {
    display: flex;
    position: relative;
    width: 10vw;
    height: 70%;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    justify-content: center;
    align-self: flex-end;
    border: solid 1px white;
    margin-bottom: 2px;
    align-items: center;
}

.footer-item::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.2);
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
}

.footer-item:hover {
    height: 90%;
    border: solid 2px white;
}

</style>