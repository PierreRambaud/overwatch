<template>
    <issue :issue="issue" :type="notification.subject.type" :update_at="notification.updated_at" />
</template>

<script>
  import axios from '~/plugins/axios';
  import gh from 'parse-github-url';
  import Issue from '~/components/github/issue';

  export default {
    name: 'notification',
    components: {
      Issue,
    },
    props: {
      notification: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        issue: {},
      };
    },
    methods: {
      getType() {
        return this.isIssue ? '/api/github/issue' : '/api/github/pull';
      },
    },
    async mounted() {
      const urlData = gh(this.notification.subject.url);
      const {data} = await axios.get(
        this.getType(),
        {
          params: {
            repo: urlData.name,
            owner: urlData.owner,
            id: urlData.filepath,
          },
        },
      );

      this.issue = data;
    },
  };
</script>

<style lang="scss">
</style>
