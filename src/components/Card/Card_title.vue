<template>
    <div class="p-2 m-1 rounded-xl bg-slate-900 text-white text-center flex justify-around font-EDU">
        <h2 class="text-2xl">
            {{ title }}
        </h2>
        <button>
                <i class="fa-solid fa-plus"></i>
        </button>
    </div>
</template>
<script>
const title = document.querySelector('.title')


export default {
    props: {
        title: { default: "sem título" }, 
        icon: {}
    }
}
</script>