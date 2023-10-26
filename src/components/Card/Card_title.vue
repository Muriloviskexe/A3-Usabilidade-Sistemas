<template>
    <h2 class="p-2 m-1 rounded bg-slate-800 text-white text-center text-lg title">
        {{ title }}
    </h2>
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