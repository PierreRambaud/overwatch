<template>
    <section class="container">
        <h1 class="title">
            GitHub Pull Requests
        </h1>
        <ul class="prs">
            <li v-for="(pr, index) in prs" :key="index" class="github-pr">
                <nuxt-link :to="{ name: 'id', params: { id: index }}">
                    {{ user.name }}
                </nuxt-link>
            </li>
        </ul>
    </section>
</template>

<script>
  import axios from '~/plugins/axios';

  export default {
    async asyncData() {
      const {data} = await axios.get('/api/repositories');
      return {users: data};
    },
    head() {
      return {
        title: 'Repositories',
      };
    },
  };
</script>

<style scoped>
  .title {
    margin: 30px 0;
  }
  .github-prs {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .user {
    margin: 10px 0;
  }
</style>
