<!-- eslint-disable max-len -->
<template>
  <h1>Sign Up // Sign In</h1>
  <h3>Si no tienes una cuenta, entra tu mail y tu contraseña y recibirás un mail de confirmación.</h3>
  <div>
        <label for="email">
        <b>Email</b> <br>
        <input type="text" placeholder="Enter Email" name="email" required>
        </label> <br>
    </div> <br>

    <div>
        <label for="password">
        <b>Password</b> <br>
        <input type="password" placeholder="Enter Password" name="password" required>
        </label> <br>
    </div> <br>

  <button @click="handleSignUp">SignUp</button>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';
// import SignInForm from '@/Components/SignInForm.vue';

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
  // components: { SignInForm },
};
</script>
