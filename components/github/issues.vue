<template>
    <div class="issues">
        <ul class="notifs">
            <issue :issue="issue" v-for="(issue, index) in issues" :key="issue.id" :type="issueType" />
        </ul>
    </div>
</template>

<script>
  import constant from '~/constant';
  import Issue from '~/components/github/issue';

  export default {
    name: 'issues',
    components: {
      Issue,
    },
    props: {
      issues: {
        type: Array,
        required: true,
      },
    },
    computed: {
      issueType() {
        return constant.ISSUE_TYPE.PR;
      },
    },
  };
</script>
