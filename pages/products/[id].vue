<template>
	<Head>
		<Title>{{ product.title }}</Title>
	</Head>
	<div>
<ProductDetails :product="product"/>
	</div>
</template>

<script setup>
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

const { data: product } = useFetch(uri, { key: id })


if(!product.value){
	throw createError({statusCode:404,statusMessage:'Nie ma takiego produktu',fatal:true})
}

definePageMeta({
	layout: 'products',
})
</script>

<style lang="scss" scoped></style>
