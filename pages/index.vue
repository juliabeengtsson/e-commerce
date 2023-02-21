<template>
	<Navbar />
	<div class="lg:mx-20">
		<ProductCard />
	</div>
</template>

<script>
import ProductCard from "../components/ProductCard";
import Navbar from "../components/navigation/Navbar";
export default {
	components: {Navbar, ProductCard}
}
</script>