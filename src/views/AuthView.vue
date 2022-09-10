<template>
  <h1> Sign up / Sign in view</h1>
  <button @click.prevent="signUpBool=!signUpBool, signInBool=false" v-show="signUpBool == false" >
    Sign Up </button>
  <form  v-show="signUpBool == true" @submit.prevent="handleSignUp" >
    <div>
      <label
      for="email">email
      <input
      name="email"
      v-model="email"
      placeholder="email"> </label>
    </div>
    <div>
      <label for="password">Password
      <input name="password" v-model="password" placeholder="password" type="password"> </label>
    </div>
    <input type="submit" value="sign up">
  </form>
  <button @click.prevent="signUpBool=false, signInBool=!signInBool"  v-show="signInBool == false">
  Sign In </button>
  <form  v-show="signInBool == true" @submit.prevent="handleSignIn" >
    <div>
      <label for="email">email
      <input name="email" v-model="email" placeholder="email"> </label>
    </div>
    <div>
      <label for="password">password
      <input name="password" v-model="password" placeholder="password" type="password"> </label>
    </div>
    <input type="submit" value="sign In">
  </form>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'AuthView',
  data() {
    return {
      email: '',
      password: '',
      signUpBool: false,
      signInBool: false,
    };
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signUp', 'signIn']),
    handleSignUp() {
      this.signUp(this.email, this.password);
    },
    handleSignIn() {
      this.signIn(this.email, this.password);
    },
  },
  watch: {
    user() {
      if (this.user) {
        console.log(this.user);
        this.$router.push({ path: '/' });
      }
      if (!this.user) {
        console.log('user logged out');
        this.$router.push({ path: '/auth' });
      }
    },
  },
};
</script>
