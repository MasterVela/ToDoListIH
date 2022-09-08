<!-- eslint-disable max-len -->
<template>
  <h1>Sign Up // Sign In</h1>
  <h3>
    Si no tienes una cuenta, entra tu mail y tu contraseña y recibirás un mail
    de confirmación.
  </h3>
  <form>
    <label for="email">
      <b>Email</b> <br />
      <input
        v-model="emailValue"
        type="email"
        placeholder="Enter Email"
        name="email"
        required
      />
    </label>
    <br />
    <br />
    <label for="password">
      <b>Password</b> <br />
      <input
        v-model="passwordValue"
        type="password"
        placeholder="Enter Password"
        name="password"
        required
      />
    </label>
    <br /><br />
    <button @click.prevent="handleSignUp">SignUp</button>
    <span id="emailID" ref="1" style="display: block">{{ emailValue }}</span>
    <span id="passwordID" ref="2" style="display: block">{{ passwordValue }}</span>
  </form>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';
// import SignInForm from '@/Components/SignInForm.vue';
export default {
  data() {
    return {
      emailValue: '',
      passwordValue: '',
      message: '',
    };
  },
  name: 'AuthView',
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signUp']),
    handleSignUp() {
      const userData = {
        emailData: this.emailValue,
        passwordData: this.passwordValue,
      };
      this.signUp(userData.emailData, userData.passwordData);
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
