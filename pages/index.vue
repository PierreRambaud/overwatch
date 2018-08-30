<template>
    <section class="container">
        <h1 class="title">
            GitHub Notifications Priorizer
        </h1>

        <notifications :notifications="notifications" />
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
        title: 'GitHub Notifications Priorizer',
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
