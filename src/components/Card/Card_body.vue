<template>
    <div class="p-3 m-1 text-black font-bold">
        {{ text }}
    </div>
</template>
<script>
export default {
    props: {
        text: { default: "Corpo" }
    }
}
</script>