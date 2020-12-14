<template>
  <div class="home page">
    <h3>Home page</h3>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',

  components: {
  },

  data: () => {
    return {
      // msg: 'Welcome to Index!!!',
      isShownModal: false,
      inputError: false,
      checkboxState: false,

      pagination: {
        limit: 20,
        offset: 0,
        total: 60
      }
    }
  },

  methods: {
    
  }
}
</script>
