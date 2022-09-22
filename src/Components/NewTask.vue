<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->

<!-- eslint-disable max-len -->
<template>
  <div
    class="main-task"
  >
    <!--INPUT-->
    <form @click="submit">
      <input
        aria-label="task"
        type="text"
        placeholder="Añade una tarea..."
        class="add-button"
        v-model="task"
      />
      <button class="add-button"
        type="submit"> Añadir </button>
    </form>
  </div>
</template>

<script>
import { supabase } from '@/supabase';

export default {
  methods: {
    async submit() {
      const id = this.getUserId();
      // eslint-disable-next-line no-unused-vars
      const { data, error } = await supabase
        .from('tasks')
        .insert([{ title: this.task, user_id: id }]);
      this.getAllTasks();
    },
    getUserId() {
      const res = localStorage.getItem('supabase.auth.token');
      const finalRes = JSON.parse(res);
      const { id } = finalRes.currentSession.user;
      return id;
    },
    getAllTasks() {
      this.$emit('getAll');
    },
  },
  data() {
    return {
      task: '',
    };
  },
};
</script>
