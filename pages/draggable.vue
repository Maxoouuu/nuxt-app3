<template>
    <div
      class="parent"
      ref="slider"
      @mousedown="startDragging()"
      @mouseup="stopDragging()"
      @mouseleave="stopDragging()"
      @mousemove="mousemove()"
    >
      <div class="child select-none" >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem Ipsum
      </div>
    </div>
  </template>
  
  <script setup>
  const slider = ref("slider");
  /* const slider = this.$refs["slide"].focus() */
  let mouseDown = false;
  let startX, scrollLeft;
  
  let startDragging = function (e) {
    mouseDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };
  let stopDragging = function (event) {
    mouseDown = false;
  };
  
  let mousemove = function (e) {
    e.preventDefault();
    if (!mouseDown) {
      return;
    }
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;
  };
  </script>
  
  <style>
  .parent {
    width: 300px;
    border: 5px solid red;
    overflow-x: hidden;
    float: left;
  }
  .child {
    width: 1000px;
    float: left;
    font-size: 15px;
    font-family: arial;
    padding: 10px;
    cursor: pointer;
  }
  </style>
  