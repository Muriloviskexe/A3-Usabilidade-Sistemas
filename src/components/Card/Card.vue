<template>
    <div class="border p-2 m-1 rounded-xl">
        <Card_title :title="item.title" :icon="item.icon"/>
        <Card_body :text="item.body"/>
        <Card_footer />
    </div>
</template>
<script>
import Card_title from './Card_title.vue';
import Card_body from './Card_body.vue';
import Card_footer from './Card_footer.vue';

export default {
    components: { Card_title, Card_body, Card_footer },
    props: {
        item: { default: null, type: Object }
    }
}
</script>
<style>
    
</style>