<template>
	<div class="sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 flex flex-col items-center gap-6 mt-12 lg:place-items-center">
		<div v-for="product of products"
			 class="flex flex-col items-center w-full p-4 border-2 h-96 mx-12 relative">

			<div class="mb-4 p-6">
				<img :src="product.image" alt="image" class="w-24 aspect-square object-fit"/>
			</div>

			<div class="text-center mb-5">
				{{ product.title }}
			</div>

			<div class="font-bold">
				Price: {{ product.price }}
			</div>

			<div class="absolute bottom-5">
				<button class="text-white bg-blue-900 py-2 px-4 hover:bg-blue-800">Lägg till i varukorgen</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import {getProducts} from "~/services/products";

const products = await getProducts()

</script>