<template>
	<div>
		<div class="grid grid-cols-4 gap-5">
			<div v-for="product in products" :key="product.id">
			<product-card :product="product"/>
			</div>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'products',
})

const { data: products } = await useFetch('https://fakestoreapi.com/products')

useHead({
	title:'Nuxt Dojo | Merge',
	meta:[
		{
			name:'description',content:'merge'
		}
	]
})
</script>
