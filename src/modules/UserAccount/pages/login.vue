<template>
  sdfds
</template>

<script lang="ts">
export default defineComponent({
  name: 'UserAccountLogin',
  components: {
  },
  setup () {
  }
});

</script>

<style lang="scss" scoped>
.user-account-login {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f0f2f5;
  background-image: url("@/assets/images/logo-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  .user-account-nav {
    display: flex;
    justify-content: space-between;
    color: #f0f2f5;
    padding: 0 16px;
    box-shadow: 0 -3px 8px 3px #727272;

    // box-shadow: 0 1px 4px 3px rgb(0 21 41 / 8%);

    background-color: rgba(#8d8b89, 30%);

    .nav-left,
    .nav-right {
      display: flex;
      height: 48px;
      align-items: center;
    }

    .nav-logo {
      width: 32px;
      height: 32px;
      border-radius: 3px;
      background-image: url("@/assets/images/i18n.svg");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }

    .nav-circle {
      width: 6px;
      height: 6px;
      margin: 0 10px;
      border-radius: 50%;
      background: #f0f2f5;
    }

    .nav-title {
      font-size: 18px;
      font-weight: 500;
      line-height: 25px;
    }
  }

  .user-account-body {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}

@media screen and (max-width: 600px) {

  .user-account-container-layout {
    justify-content: center;

    .user-account-nav {
      left: 0;
      right: 0;
      margin: auto;
      justify-content: center;
    }
  }
}
</style>
