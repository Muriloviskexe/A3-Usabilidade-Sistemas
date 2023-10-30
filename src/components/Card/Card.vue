<template>
    
    <div class="border border-black m-4 rounded-xl">
        <Card_title :title="item.title" :icon="item.icon"/>
        <Card_body :text="item.body"/>
    </div>
</template>
<script>
import Card_title from './Card_title.vue';
import Card_body from './Card_body.vue';

export default {
    components: { Card_title, Card_body},
    props: {
        item: { default: null, type: Object }
    }
}
</script>
<style>
    
</style>