<template>
    <div>
        Teste {{ contador }} e 2x contador= {{ contador*2 }} 
        <button class="btn btn-primary btn-sm" @click="incrementar">Incrementa</button>

        <input type="text" class="border" v-model="caixa_nome"/>
        <button class="btn btn-warning btn-sm" @click="adicionaNome">Adicionar nome</button>
        <div class="border p-1 rounded">
            o valor do atributo caixa_nome é: <span class="bg-gray-200 p-1 rounded">{{ caixa_nome }}</span>
        </div>
        
        <div v-for="p in nomes">
            <div class="border rounded p-1 font-semibold text-lg m-1">
                {{ p }}
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            contador: 0,
            nomes: [],
            caixa_nome: ''
        }
    },
    methods: {
        
        incrementar() {
            this.contador++
        },

        adicionaNome() {
            let temp = this.caixa_nome.toUpperCase()
            this.nomes.push(temp)
            this.caixa_nome = ''
        }
    },
}
</script>
<style>
    
</style>