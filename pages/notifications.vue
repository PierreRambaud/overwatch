<template>
    <section class="container">
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
        title: 'Overwatch Notifications',
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
