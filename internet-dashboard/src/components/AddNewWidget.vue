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
    name: 'add-widgets',
    data() {
    return {
        visible: this.$store.state.addNewWidget
        };
    },
    methods: {
        exit() {
            this.$store.commit('TOGGLE_ADD_NEW_WIDGET', false);
        },
    },
    computed: {
    }
};
</script>

<style>


</style>