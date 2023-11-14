function DarkMode(){


};
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
      document.getElementById('sideBar').classList.remove('-left-0')},

adcTarefa: function(){
      let temp = this.caixa_tarefa.charAt(0).toUpperCase() + this.caixa_tarefa.slice(1)
      this.tarefas.push(temp)
      this.caixa_tarefa = ''
}
