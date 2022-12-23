<template>
  <div id="shortcut-list-div">
    <template v-for="shortcut in shortcuts" v-bind:key="shortcut.URL">
      <shortcut-component :shortcut='shortcut' />
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ShortcutComponent from './ShortcutComponent.vue'

export default {
  name: 'shortcut-list',
  components: {
    ShortcutComponent
  },
  computed: {
    ...mapState({
      shortcuts: state => state.shortcuts
    })
  }
}
</script>

<style>

#shortcut-list-div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 5%;
}

</style>