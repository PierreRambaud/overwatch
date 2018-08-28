<template>
    <section class="container">
        <h1 class="title">
            GitHub Pull Requests
        </h1>
        <ul class="prs">
            <repository-list :repositories="prs" />
        </ul>
    </section>
</template>

<script>
  import axios from '~/plugins/axios';
  import RepositoryList from '~/components/github/repositories';

  export default {
    componenets: {
      RepositoryList,
    },
    async asyncData() {
      const {data} = await axios.get('/api/github/notifications');
      return {prs: data};
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
