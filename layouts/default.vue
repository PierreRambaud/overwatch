<template>
    <div>
        <nuxt/>
        <my-footer/>
    </div>
</template>

<script>
  import MyFooter from '~/components/footer';

  export default {
    components: {
      MyFooter,
    },
  };
</script>
