<template>
    <div class="p-3 m-1">
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