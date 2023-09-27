<template>
    <div class="container">
      <h1>Couter: {{ counter }}</h1>
      <div class="d-flex">
        <button @click="onIncrement" class="btn btn-success">Add</button>
        <button @click="onDecrement" class="btn btn-danger">Remove</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        counter: 0,
      };
    },
    methods: {
      onIncrement() {
        this.counter += 1;
      },
      onDecrement() {
        this.counter -= 1;
      },
    },
  };
  </script>
  
  <style></style>
  