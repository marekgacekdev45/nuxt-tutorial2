<template>
    <div class="card text-center flex flex-col justify-between">
        <img :src="product.image" alt="product thumb" class="thumb">
        <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
        <NuxtLink :to="`/products/${product.id}`" class="btn my-4">view details</NuxtLink>
    </div>
</template>

<script setup>



const {product} = defineProps({
    product:Object
})

</script>

<style lang="css" scoped>

.thumb{
    height: 120px;
    object-fit: contain;
    max-width: 70%;
    margin: 0 auto;
}

</style>