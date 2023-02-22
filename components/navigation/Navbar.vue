<template>
	<div class="fixed w-full bg-gray-500 top-0 left-0 right-0 z-50">
		<div class="relative w-full mx-auto px-4 sm:px-6">
			<div class="relative flex justify-between py-2 items-center xl:justify-start xl:space-x-10">
				<!-- Logo -->
				<div class="flex justify-start">
					<a class="cursor-pointer text-white">
						<NuxtLink to="/">
							<span>Home</span>
						</NuxtLink>
					</a>
				</div>

				<!-- Cart icon -->
				<nav class="xl:flex xl:space-x-8 md:pr-10 xl:justify-end xl:w-full items-center">
					<div class="relative">
						<a href="/checkout"><CartIcon/></a>
					</div>
				</nav>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import CartIcon from "~/components/svgs/CartIcon"
</script>