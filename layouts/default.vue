<template>
    <div>
        <ow-menu />
        <nuxt/>
        <ow-footer />
    </div>
</template>

<script>
  import OwFooter from '~/components/footer';
  import OwMenu from '~/components/menu';

  export default {
    components: {
      OwFooter,
      OwMenu,
    },
  };
</script>
