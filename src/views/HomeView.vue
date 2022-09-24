<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <section>
    <div class="h1-home">
      <h1>Task manager</h1>
    </div>
    <button class="signout" @click="handleSignOut">Sign Out</button>
    <div class="center-items">
      <NewTask @getAll="getAllTasks" />
      <!-- <h1 class="bg-purple-200 text-center py-10"></h1> -->
      <TaskItem
        @getAll="getAllTasks"
        v-for="task in tasks"
        :key="task.id"
        :task="task"
      />
    </div>
    <router-view></router-view>
  </section>
</template>

<script>
import { supabase } from '@/supabase';
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';
import NewTask from '@/Components/NewTask.vue';
import TaskItem from '@/Components/TaskItem.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      tasks: [],
    };
  },
  components: {
    TaskItem,
    NewTask,
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signOut']),
    handleSignOut() {
      this.signOut();
    },
    async getUserId() {
      const res = localStorage.getItem('supabase.auth.token');
      const myJson = JSON.parse(res);
      const { id } = myJson.currentSession.user;
      return id;
    },
    async getAllTasks() {
      const { data } = await supabase
        .from('tasks')
        .select('*')
        .order('id', { ascending: false });
      this.tasks = data;
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
  mounted() {
    this.getAllTasks();
  },
};
</script>

<style>
.signout {
  position: fixed;
  right: 5px;
}
</style>
