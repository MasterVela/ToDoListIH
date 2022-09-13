<!-- eslint-disable max-len -->
<template>
  <div class='form-space'>

  <h1 class='title'>
    Antes de nada... <br> ¿Quién eres?</h1>

  <!-- Registro -->
  <form v-show="registerChecker == true" @submit.prevent="handleSignUp">
    <h2>¿Tu primera vez?<br> ¡Creemos un usuario!</h2> <br>
    <div class="form">
      <label for="email">
        Email: <br>
        <input name="email" v-model="email" placeholder="email..." class='imput-form'/> <br> <br>
      </label>
      <label for="password">
        Password: <br>
        <input name="password" v-model="password" placeholder="password..." type="password" class='imput-form'/>
      </label> <br> <br>
    <input type="submit" class='form-button' value="Registro" />
    </div>
  </form>

  <!-- Log In -->
  <form v-show="loginChecker == true" @submit.prevent="handleSignIn">
    <h2>¿Vuelves por aquí? <br> ¡Perfecto!</h2> <br>
    <div class="form">
        <label for="email">
          Email: <br>
          <input name="email" v-model="email" placeholder="email..." class='imput-form'/> <br> <br>
        </label>
        <label for="password">
          Password: <br>
          <input name="password" v-model="password" placeholder="password..." type="password" class='imput-form'/>
        </label> <br> <br>
      <input type="submit" class='form-button' value="Login" />
    </div>
  </form>

  <div class="main-button-container">
  <button @click.prevent="(registerChecker = false), (loginChecker = !loginChecker)"
    v-show="loginChecker == false" class="button" id="button-left"> Login </button>

  <button @click.prevent="(registerChecker = !registerChecker), (loginChecker = false)"
    v-show="registerChecker == false" class="button" id="button-right"> Registro </button>
  </div>

</div>
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
      registerChecker: false,
      loginChecker: false,
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

<style scoped>

.title {
  font-size: 60px;
  color: white;
  text-align: center;
  position: fixed;
  top: 50px;
}
* {
  background-color: rgb(162, 162, 241);
  color: white;
}
.form-space{
  font-family: 'roboto';
  display: grid;
  place-items: center;
  height: 100vh;
  width:  100vw;
}

.button {
  font-family: 'roboto';
  padding: 10px;
  width: 100px;
  border: 0px;
  background-color: white;
  border-radius: 6px;
  text-transform: capitalize;
  color: #333333;
}

.form-button {
  padding: 5px;
  color: #333333;
  border: 2px solid #333333;
  border-radius: 6px;
  margin-left: 5px
}

.imput-form {
  background-color: white;
  padding: 5px;
  border: 0px;
  border-radius: 6px;
  margin: 5px;
}

.main-button-container{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 0px;
  position: fixed;
  bottom: 20%;
  background-color: transparent;
}

#button-left {
  grid-area: 1 / 1 / 2 / 2;
}
#button-right {
  grid-area: 1 / 2 / 2 / 3;
}

</style>
