<template>
    <section class="container">
        <h1 class="title">
            Overwatch
        </h1>

        <nuxt-link class="button" to="/notifications">
            Notifications
        </nuxt-link>

        <nuxt-link class="button" to="/issues">
            Issues
        </nuxt-link>
    </section>
</template>

<script>
  import axios from '~/plugins/axios';
  import Notifications from '~/components/github/notifications';

  export default {
    components: {
      Notifications,
    },
    head() {
      return {
        title: 'Overwatch',
      };
    },
    data() {
      return {
        notifications: {},
      };
    },
    async asyncData() {
      const {data} = await axios.get('/api/github/notifications');
      return {notifications: data};
    },
  };
</script>
