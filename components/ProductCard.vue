<template>
	<div class="mt-20 mx-10 sm:mx-0">
		<h1 class="text-xl font-semibold">Vårt sortiment</h1>
	</div>

	<div class="mx-8 sm:mx-0 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4 flex flex-col items-center gap-6 mt-8 lg:place-items-center">
		<div v-for="product of products"
			 class="flex flex-col items-center w-full p-4 border-2 h-96 relative">
			<div class="mb-4 p-6">
				<img :src="product.image" alt="image" class="w-24 aspect-square object-fit"/>
			</div>
			<div class="text-center mb-5">
				{{ product.title }}
			</div>
			<div class="flex gap-3 items-center absolute bottom-5">
				<span class="font-bold"> Pris: {{ product.price }} </span>
				<button class="text-white bg-gray-500 py-2 px-4 hover:bg-gray-400" @click="addToCart(product)">Lägg till i varukorgen</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import {getProducts} from "~/services/products";

const products = await getProducts()

function addToCart(_product) {
	// Create local storage if it does not exists
	if (localStorage.getItem("products") === null) {
		localStorage.setItem('products', '[]')
	}

	// Get all products from local storage and save them in list
	const productList = JSON.parse(localStorage.getItem('products'))

	// Check if the product to be added already is added to the cart
	const exists = productList.findIndex((product) => product.id === _product.id)

	// If object is already added to the cart
	if(exists !== -1) {
		// Change the quantity value for the object
		productList[exists]['quantity'] = productList[exists]['quantity'] + 1
	} else {
		// Set quantity and add to list
		_product['quantity'] = 1
		productList.push(_product)
	}

	// Add list to local storage
	localStorage.setItem('products', JSON.stringify(productList))
}

</script>