<template>
    <section class="container">
        <b-pagination size="sm" :total-rows="total_count" v-model="page" align="center" />

        <issues :issues="issues" />

        <b-pagination size="sm" :total-rows="total_count" v-model="page" align="center" />
    </section>
</template>

<script>
  import axios from '~/plugins/axios';
  import Issues from '~/components/github/issues';

  export default {
    components: {
      Issues,
    },
    head() {
      return {
        title: 'Overwatch Issues',
      };
    },
    data() {
      return {
        issues: {},
        page: 1,
        total_count: 0,
      };
    },
    watch: {
      async page(val) {
        const {data} = await axios.get(
          '/api/github/issues',
          {
            params: {
              page: val,
            },
          },
        );
        this.issues = data.items;
        this.total_count = data.total_count;
      },
    },
    async asyncData() {
      const {data} = await axios.get(
        '/api/github/issues',
        {
          params: {
          },
        },
      );
      return {
        issues: data.items,
        total_count: data.total_count,
        page: 1,
      };
    },
  };
</script>
