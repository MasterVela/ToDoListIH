<template>

     <form action="action_page.php" style="border:1px solid #ccc">
  <div class="Form">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr>

    <div>
        <label for="email"><b>Email</b></label> <br>
        <input type="text" placeholder="Enter Email" name="email" required>
    </div> <br>

    <div>
        <label for="password"><b>Password</b></label> <br>
        <input type="password" placeholder="Enter Password" name="psw" required>
    </div> <br>

    <div class="clearfix">
        <button type='submit' @click="handleSignUp">SignUp</button>
    </div>
  </div>
</form>
</template>

<style>
    .Form {
        width: 40%;

    }
</style>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
name: 'AuthView',
    computed: {
    ...mapState(userStore, ['user']),
    },
    methods: {
    ...mapActions(userStore, ['signUp']),
    handleSignUp() {
        const userData = {
        email: '',
        password: '',
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
    </script>