<template>
  <textarea @focus="auto_grow(this)"></textarea>
</template>

<script setup>
function auto_grow(element) {
  element.style.height = "5px";
  element.style.height = element.scrollHeight + "px";
}
</script>

<style>
textarea {
  resize: none;
  overflow: hidden;
  min-height: 50px;
  max-height: 100px;
}
</style>