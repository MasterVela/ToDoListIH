<template>
  <div class="home">
    <h1>esto es la home</h1>
    <taskJobs></taskJobs>
    <button @click="handleSignOut">Sign Out</button>
    <!-- m'he d'emportar això a l'app ' o crear un component de nav bar -->
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'HomeView',
  components: {},
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signOut']),
    handleSignOut() {
      this.signOut();
    },
  },
  watch: {
    user() {
      if (!this.user) {
        console.log('user logged out');
        this.$router.push({ path: '/auth' });
      }
    },
  },
};
</script>
