<template>
  <div class="bg-white h-200" id="all">
    <div :class="flex justify-center" id="header">
        <h2 class="text-center p-4 text-5xl font-light font-mono">
            {{ title }}
        </h2>
      
      <div class="absolute right-8 top-2 text-lg hover:scale-110">
          <button v-on:click="darkMode()" class="m-2"><i class="fa-regular fa-moon"></i></button>
          <button v-on:click="lightMode()"><i class="fa-regular fa-sun"></i></button>
      </div>

      <div class="absolute top-2 left-6" id="bar">
        <button v-on:click="openBar()"><i class="fa-solid fa-bars"></i></button>
      </div>
    </div>
    <div class="h-screen w-300px bg-slate-900 fixed -left-100 top-0 z-10 flex justify-end text-white" id="sideBar">
      <div class="flex gap-3 text-white text-xl absolute top-10 left-10" id="btn-users">
        <button><i class="fa-regular fa-user"></i></button>
        <button><i class="fa-regular fa-bell"></i></button>
      </div>

      <div class="absolute top-40 left-10">
        <h5>Notas</h5>
        <h5>Tutorial</h5>
        <h5>Semanas</h5>
        <h5>Criadores</h5>
        <h5>Sair</h5>
      </div>

      <div>
        <button class="relative top-2 right-4 text-white transition ease-in duration-200" v-on:click="closeBar()"><i class="fa-solid fa-xmark"></i></button>
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
      document.getElementById('header').classList.add('bg-slate-900')
      document.getElementById('header').classList.add('text-white')
      document.getElementById('all').classList.remove('bg-white')
      document.getElementById('all').classList.add('bg-slate-600')
      document.getElementById('card').classList.add('text-white')
      document.getElementById('card').classList.remove('text-black')


    },
    lightMode: function(){
      document.getElementById('header').classList.remove('bg-slate-900')
      document.getElementById('header').classList.remove('text-white')
      document.getElementById('all').classList.add('text-slate-900')
      document.getElementById('all').classList.add('bg-white')
      document.getElementById('card').classList.add('text-black')
      document.getElementById('card').classList.remove('text-white')

    },
    openBar: function(){
      document.getElementById('sideBar').classList.remove('-left-100')
      document.getElementById('sideBar').classList.add('-left-0')

    },
    closeBar: function() {
      document.getElementById('sideBar').classList.add('-left-100')
      document.getElementById('sideBar').classList.remove('-left-0')
    },
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Edu+TAS+Beginner&family=Indie+Flower&display=swap');

</style>