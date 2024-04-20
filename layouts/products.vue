<template>
	<div>
		<header class="shadow-md">
			<nav class="container mx-auto p-4">
                <nuxt-link to="/" class="font-bold">dojo</nuxt-link>
				
			</nav>
		</header>
		<div class="container mx-auto p-4">
			<slot></slot>
		</div>
        <footer>
            footer
        </footer>
	</div>
</template>

<script setup></script>

<style lang="css" >


footer{
    background-color: cornflowerblue;
}
</style>
