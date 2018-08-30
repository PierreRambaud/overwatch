<template>
    <h3>
        <a :href="repository.html_url" target="_blank">
            {{ repository.full_name }}
        </a>
    </h3>
</template>

<script>
  export default {
    name: 'repository',
    props: {
      repository: {
        type: Object,
        required: true,
      },
    },
  };
</script>
