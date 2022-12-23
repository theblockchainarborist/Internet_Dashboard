Copy code
<template>
  <div id="shortcut-component-div" v-on:click="openURL">
    <p>{{ shortcut.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'shortcut-component',
  props: {
    shortcut: {
      type: Object,
      required: true
    }
  },
  methods: {
    openURL() {
      window.open(this.shortcut.URL, '_blank')
    }
  }
}
</script>

<style>
#shortcut-component-div {
  height: 100px;
  width: 100px;
  background-color: white;
  border: solid 1px black;
  margin: 2%;
  color: black;
}
</style>