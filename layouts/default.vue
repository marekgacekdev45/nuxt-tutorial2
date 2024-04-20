<template>
	<div>
		<header class="shadow-sm bg-white">
			<nav class="container mx-auto p-4 flex justify-between">
				<nuxt-link to="/" class="font-bold">dojo</nuxt-link>
				<ul class="flex gap-4 ">
					<li>
						<NuxtLink to="/">Home</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/about">About</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/products" class="btn">Products</NuxtLink>
					</li>
				</ul>
			</nav>
		</header>
		<div class="container mx-auto p-4">
			<slot></slot>
		</div>
	</div>
</template>

<script setup></script>

<style lang="css" >
.router-link-active{
    @apply font-bold text-green-600
}
</style>
