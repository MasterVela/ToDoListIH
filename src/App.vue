<template>
  <router-view />
  <nav v-if="user !== null" class="navBar">
    <router-link to="/"><p id="navtext"></p></router-link>
  </nav>
</template>

<script >
import userStore from '@/store/user';
import { mapState, mapActions } from 'pinia';

export default {
  name: 'App',
  components: {},
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['fetchUser'], ['signOut']),
    handleSignOut() {
      this.signOut();
    },
  },
  async created() {
    try {
      await this.fetchUser();
      console.log(this.user);
      if (!this.user) {
        this.$router.push({ path: '/auth' });
      } else {
        this.$router.push({ path: '/' });
      }
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
