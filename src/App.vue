<template>
  <div class="bg-white h-300" id="all">
    <div class="flex justify-center" id="header">
        <h2 class="text-center p-4 text-5xl font-light font-mono">
            {{ title }}
        </h2>
      
      <div class="absolute right-8 top-2 text-lg hover:scale-110">
          <button v-on:click="darkMode()" class="m-2"><i class="fa-regular fa-moon"></i></button>
          <button v-on:click="lightMode()"><i class="fa-regular fa-sun"></i></button>
      </div>

      <div class="absolute top-2 left-6" id="bar">
        <button @click="show = !show"><i class="fa-solid fa-bars"></i></button>
      </div>
        <Transition>
            <div v-if="show" class="h-screen w-300px bg-slate-900 fixed left-0 top-0 z-10 flex justify-end text-white"><div class="flex gap-3 text-white text-xl absolute top-10 left-10">
              <button><i class="fa-regular fa-user"></i></button>
              <button><i class="fa-regular fa-bell"></i></button>
            </div>

            <div class="absolute top-40 left-10 flex-col text-2xl grid justify-items-start gap-2">
              <button class="hover:scale-110">Notas</button>
              <button class="hover:scale-110">Tutorial</button>
              <button class="hover:scale-110">Semanas</button>
              <button class="hover:scale-110">Criadores</button>
              <button class="hover:scale-110">Sair</button>
            </div>

            <div>
            <button class="relative top-2 right-4 text-white" @click="show = !show"><i class="fa-solid fa-xmark"></i></button>
            </div>
          </div>
        </Transition>
      
    </div>

    <div class="conteiner grid grid-cols-3 gap-2 justify-center">
    
        <div class="cartao border border-black m-4 rounded-xl text-white">
          <div class="p-2 m-1 rounded-xl bg-slate-900 text-white text-center flex justify-around font-EDU">
            <h2 class="text-2xl">
              Segunda-Feira
            </h2>

            <transition name="openPop">
              <ConfirmDialog v-if="pop" @ok="onOk()" @cancel="onCancel()"></ConfirmDialog>
            </transition>

            <button @click="popUp">
              <i class="fa-solid fa-plus"></i>
            </button>
            
          </div>

          <div class="p-3 m-1 text-black font-bold font-mono text-lg">
            <input type="text" class="border" v-model="caixa_tarefa"/>
            <p>Tarefas:</p>
            <p>{{caixa_tarefa}}</p>

            <div v-for="p in tarefas">
              <div class="border rounded p-1 font-semibold text-lg m-1">
                {{ p }}
              </div>
          </div>

          </div>
        </div>
      

        <div class="cartao border border-black m-4 rounded-xl text-white">
          <div class="p-2 m-1 rounded-xl bg-slate-900 text-white text-center flex justify-around font-EDU">
            <h2 class="text-2xl">
              Terça-Feira
            </h2>
            <button>
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>

          <div class="p-3 m-1 text-black font-bold font-mono text-lg">
            <p class="textoTarefa">Tarefas:</p>
          </div>
        </div>
      
      
        <div class="cartao border border-black m-4 rounded-xl text-white">
          <div class="p-2 m-1 rounded-xl bg-slate-900 text-white text-center flex justify-around font-EDU">
            <h2 class="text-2xl">
              Quarta-Feira
            </h2>
            <button>
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
          
          <div class="p-3 m-1 text-black font-bold font-mono text-lg">
            <p class="textoTarefa">Tarefas:</p>
          </div>
        </div>
      

      <div class="cartao border border-black m-4 rounded-xl text-white">
        <div class="p-2 m-1 rounded-xl bg-slate-900 text-white text-center flex justify-around font-EDU">
          <h2 class="text-2xl">
            Quinta-Feira
          </h2>
          <button>
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>


        <div class="p-3 m-1 text-black font-bold font-mono text-lg">
          <p class="textoTarefa">Tarefas:</p>
        </div>
      </div>

      <div class="cartao border border-black m-4 rounded-xl text-white">
        <div class="p-2 m-1 rounded-xl bg-slate-900 text-white text-center flex justify-around font-EDU">
          <h2 class="text-2xl">
            Sexta-Feira
          </h2>
          <button>
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>


        <div class="p-3 m-1 text-black font-bold font-mono text-lg">
          <p class="textoTarefa">Tarefas:</p>
        </div>
      </div>

      <div class="cartao border border-black m-4 rounded-xl text-white">
        <div class="p-2 m-1 rounded-xl bg-slate-900 text-white text-center flex justify-around font-EDU">
          <h2 class="text-2xl">
            Sábado
          </h2>
          <button>
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>


        <div class="p-3 m-1 text-black font-bold font-mono text-lg">
          <p class="textoTarefa">Tarefas:</p>
        </div>
      </div>


      <div class="cartao border border-black m-4 rounded-xl text-white">
        <div class="p-2 m-1 rounded-xl bg-slate-900 text-white text-center flex justify-around font-EDU">
          <h2 class="text-2xl">
            Domingo
          </h2>
          <button>
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>


        <div class="p-3 m-1 text-black font-bold font-mono text-lg">
          <p>Tarefas:</p>
        </div>

      </div>
    </div>
    </div>

  
</template>

<script>

export default {
  data() {
    return {

      tarefas: [],

      caixa_tarefa: '',

      show:false,

      title: "Planner Online",
    }
  },
  methods: {
    darkMode: function(){
      document.getElementById('header').classList.add('bg-slate-950')
      document.getElementById('header').classList.add('text-white')

      document.getElementById('all').classList.remove('bg-white')
      document.getElementById('all').classList.add('bg-slate-900')
    
      document.getElementById('body').classList.remove('text-black')
      document.getElementById('body').classList.add('text-white')

      document.getElementsByName('cartao').classList.remove('border-black')
      document.getElementsByName('cartao').classList.add('border-white')



    },
    lightMode: function(){
      document.getElementById('header').classList.remove('bg-slate-900')
      document.getElementById('header').classList.remove('text-white')

      document.getElementById('all').classList.add('text-slate-900')
      document.getElementById('all').classList.add('bg-white')
  
      document.getElementById('body').classList.add('text-black')
      document.getElementById('body').classList.remove('text-white')

      document.getElementsByName('cartao').classList.add('border-black')
      document.getElementsByName('cartao').classList.remove('border-white')

    },
    openBar: function(){
      document.getElementById('sideBar').classList.remove('-left-100')
      document.getElementById('sideBar').classList.add('-left-0')

    },
    closeBar: function() {
      document.getElementById('sideBar').classList.add('-left-100')
      document.getElementById('sideBar').classList.remove('-left-0')
    },

    adcTarefa: function(){
      let temp = this.caixa_tarefa.toUpperCase()
      this.tarefas.push(temp)
      this.caixa_tarefa = ''
    }
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Edu+TAS+Beginner&family=Indie+Flower&display=swap');

.v-enter-active{
  transition: opacity 200ms ease-in-out;
}

.v-leave-active{
  transition: all 300ms cubic-bezier(1, 0.5, 0.8, 1);
}

.v-enter-from,
.v-leave-to {
  transform: translateX(-40px);  
  opacity: 0;
}

.darkTheme{
  background-color: #2d2f31;
}
</style>