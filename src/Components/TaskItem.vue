<!-- eslint-disable vue/no-mutating-props -->
<!-- eslint-disable max-len -->
<template>
  <div
    class="bg-gradient-to-t from-digitalLavander to-galacticCobalt rounded-md shadow-lg w-96 mt-4 mx-auto p-4 flex justify-center"
  >
    <table class="rounded-lg">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col" class="float-right"></th>
          <th scope="col" class="float-right"></th>
          <th scope="col" class="float-right"></th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td> <label for="text">
            <input
              type="text"
              v-model="task.title"
              class="rounded p-2 pl-4 pr-10 focus:outline-none"
            />
          </label>
          </td>
          <!--icons delete-->
          <td>
            <div class="float-right" @click="deleteTask(task)" @keypress="del">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="block"
                  viewBox="0 0 24 24"
                  stroke="white"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </span>
            </div>
          </td>
          <!--icons edit-->
          <td>
            <div class="float-right" @click="editTask(task)" @keypress="e">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="block"
                  viewBox="0 0 24 24"
                  stroke="white"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </span>
            </div>
          </td>
          <!--icons delete-->
          <td>
            <div class="float-right" @click="completeTask(task)" @keypress="enter">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="block"
                  viewBox="0 0 24 24"
                  stroke="white"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              {{ task.is_complete ? "Desmarcar" : "" }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { supabase } from '../supabase';

export default {
  props: {
    task: String,
  },
  data() {
    return {};
  },
  methods: {
    async deleteTask(task) {
      const taskId = task.id;
      // eslint-disable-next-line no-unused-vars
      const { data, error } = await supabase
        .from('tasks')
        .delete()
        .match({ id: taskId });
      this.getAllTasks();
    },
    async editTask(task) {
      const myTitle = task.title;
      // eslint-disable-next-line no-unused-vars
      const { data, error } = await supabase
        .from('tasks')
        .update({ title: myTitle })
        .match({ id: task.id });
      this.getAllTasks();
    },
    async completeTask(task) {
      const isComplete = !task.is_complete;
      // eslint-disable-next-line no-unused-vars
      const { data, error } = await supabase
        .from('tasks')
        .update({ is_complete: isComplete })
        .match({ id: task.id });
      this.getAllTasks();
    },
    getAllTasks() {
      this.$emit('getAll');
    },
  },
  mounted() {
    // console.log(this.task);
  },
};
</script>
