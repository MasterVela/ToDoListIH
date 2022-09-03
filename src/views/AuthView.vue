<template>
  <h1>Esta es la vista de SignUp/In</h1>
  <SignInForm />
  <!-- <button @click="handleSignUp">SignUp</button> -->
</template>

<!-- <script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';
import SignInForm from '@/Components/SignInForm.vue';

export default {
  name: 'AuthView',
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signUp']),
    handleSignUp() {
      const userData = {
        email: 'example@example.com',
        password: '123456',
      };
      this.signUp(userData.email, userData.password);
    },
  },
  watch: {
    user() {
      if (this.user) {
        console.log(this.user);
        this.$router.push({ path: '/' });
      }
    },
  },
  components: { SignInForm },
};
</script> -->
