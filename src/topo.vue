<template>
    <div class="topo">
        <h1>Planner Online</h1>

        <div>
            <button class="btn">
                <i class="fa-solid fa-plus"></i>
            </button>

            <button class="btn">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    </div>
</template>
<script> 

export default {
    data(){
        
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inclusive+Sans&family=Poppins:wght@100;300;400;500;700&family=Young+Serif&display=swap');

.topo{
    background-color: #47ca7b;
    height: 100px;
    display: flex;
    padding-left: 30px;
    align-items: center;
    justify-content: space-evenly;
}
h1{
    font-family: 'Poppins', sans-serif;
    font-size: 28pt;
    color: rgb(3, 3, 2);
}
.btn{
    border: none;
    box-shadow: 2px 2px 4px #276e43e7;
    border-radius: 20%;
    margin: 5px;
    background-color: #276e4339;
    color: rgb(26, 33, 26);
    height: 50px;
    width: 50px;
    font-size: larger;
}
.btn:hover{
    transform: scale(110%);
    transition: 300ms all; 
    background-color: rgba(208, 208, 208, 0.156)}
.btn:not(hover){
    transform: scale(100%);
    transition: 300ms all; 
}

    
</style>