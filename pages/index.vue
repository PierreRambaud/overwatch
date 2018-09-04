<template>
    <section class="container text-center">
        <img src="https://www.mememaker.net/api/bucket?path=static/img/memes/full/2017/May/4/13/where-is-pull-request.jpg" />
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
