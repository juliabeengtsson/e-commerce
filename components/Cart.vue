<template>
	<div class="mt-16 mx-6">
		<div class="flex justify-between my-6">
			<div class="font-bold text-2xl">
				<h2>Din varukorg</h2>
			</div>
			<button class="text-white bg-red-500 px-3" @click="deleteShoppingCart" v-if="products">Töm varukorgen</button>
		</div>

		<div v-for="product of products" class="flex items-center gap-3 mb-8">
			<div class="mb-4 p-6">
				<img :src="product.image" alt="image" class="w-20 aspect-square object-fit"/>
			</div>
			<div class="flex flex-col">
				<div class="mb-5">
					{{ product.title }}
				</div>
				<div>Antal: {{product.quantity}}</div>
				<div class="font-bold">
					Totalt pris: {{ product.price * product.quantity }}
				</div>
			</div>
		</div>
	</div>

	<a href="/" class="mx-6 mt-4 md:mt-0" v-if="products">
		<button class="bg-gray-500 text-white px-4 py-2">Fortsätt shoppa</button>
	</a>

	<div class="bg-gray-100 w-full py-6 mt-16 md:flex md:justify-between md:place-items-center" v-if="products">
		<div class="md:flex md:flex-col md:justify-center">
			<div class="mx-6">
				<span class="font-bold">Antal produkter: {{ totalQuantity }}</span>
			</div>

			<div class="mx-6">
				<span class="font-bold">Totalt pris: {{ totalSum }}</span>
			</div>
		</div>

		<div class="mx-6 mt-4 md:mt-0">
			<button class="bg-gray-500 text-white px-4 py-2">Gå till betalning</button>
		</div>
	</div>

	<div v-else class="mx-6 flex flex-col md:flex md:justify-start">
		<span>Din varukorg är tom för tillfället!</span>
		<a href="/">
			<button class="bg-gray-500 text-white px-4 py-1 mt-8">Tillbaka till vårt sortiment</button>
		</a>
	</div>
</template>

<script setup lang="ts">
const products = ref([])

if(process.client) {
	products.value = JSON.parse(localStorage.getItem('products'))
}

const totalSum = computed(() => {
	let sum = 0;
	for (let product of products.value) {
		sum += product.price * product.quantity;
	}

	return sum;
})

const totalQuantity = computed(() => {
	let q = 0;
	for (let product of products.value) {
		q += product.quantity;
	}

	return q;
})

function deleteShoppingCart() {
	products.value = localStorage.clear('products')
}
</script>