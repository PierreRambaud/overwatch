<template>
    <div class="notifications">
        <template v-for="(repo, index) in notifs">
            <repository :repository="repo.data" />

            <ul class="notifs">
                <notification :notification="notif" v-for="(notif, index) in repo.issues" :key="notif.id" />
            </ul>
        </template>
    </div>
</template>

<script>
  import Repository from '~/components/github/repository';
  import Notification from '~/components/github/notification';

  export default {
    name: 'notifications',
    components: {
      Notification,
      Repository,
    },
    props: {
      notifications: {
        type: Array,
        required: true,
      },
    },
    computed: {
      notifs() {
        const result = {};
        this.notifications.forEach((value) => {
          const issue = Object.assign({}, value);
          const repoId = issue.repository.id;
          delete issue.repository;

          if (!(repoId in result)) {
            result[repoId] = {
              issues: [],
              data: value.repository,
            };
          }

          result[repoId].issues.push(issue);
        });
        return result;
      },
    },
  };
</script>
