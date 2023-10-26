<template>
  <div class="bg-slate-100" id="header">
    <div class="flex justify-around  "><!--bg-slate-900 text-white -->
      <h2 class="text-center p-4 text-5xl font-serif font-light">
        {{ title }}
      </h2>
      <div class="flex gap-3 text-white text-xl">
        <button><i class="fa-regular fa-user"></i></button>
        <button><i class="fa-regular fa-bell"></i></button>
      </div>
      <div class="absolute right-8 top-2 text-lg">
        <button v-on:click="darkMode"><i class="fa-solid fa-toggle-on">
          <!-- <i class="fa-solid fa-toggle-off"></i> -->
        </i></button>
      </div>
    </div>
    <div class="grid grid-cols-3">
      <div v-for="item in cards">
        <Card :item="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./components/Card/Card.vue"

export default {
  components: { Card },
  data() {
    return {
      title: "Planner Online",
      cards: [
        { title: 'Segunda-feira', body: 'Tarefas:' },
        { title: 'Terça-feira', body: 'Tarefas:' },
        { title: 'Quarta-feira', body: 'Tarefas:' },
        { title: 'Quinta-feira', body: 'Tarefas:' },
        { title: 'Sexta-feira', body: 'Tarefas:' },
        { title: 'Sabado', body: 'Tarefas:' },
        { title: 'Domingo', body: 'Tarefas:' },

  
      ]
    }
  },
  methods: {
    darkMode: function(){
      alert('oi')
      document.getElementById('title').addClass('bg-slate-900 text-white')
    }
  }
}

</script>

<style></style>