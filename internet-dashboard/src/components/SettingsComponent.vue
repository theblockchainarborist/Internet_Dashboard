<template>
  <div class="modal-overlay" 
    v-if="visible">

    <div class="modal" 
        ref="modal" 
        tabindex="-1">

        <div id="add-new-widget-div" 
            class="pop-up-form">

            <input type="button" value="Exit" v-on:click="exit">
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'settings-component',
    data() {
    return {
        visible: this.$store.state.showSettings
        };
    },
    methods: {
        exit() {
            this.$store.commit('TOGGLE_SHOW_SETTINGS', false);
        },
    },
    computed: {
    }
};
</script>

<style>


</style>