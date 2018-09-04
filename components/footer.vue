<template>
    <footer>
        {{ joke.setup }} ... {{ joke.punchline }}
    </footer>
</template>

<script>
  import axios from '~/plugins/axios';

  export default {
    data() {
      return {
        joke: {},
      };
    },
    async mounted() {
      const {data} = await axios.get('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke?type=programming');
      this.joke = data;
    },
  };
</script>
