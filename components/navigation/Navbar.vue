<template>
	<div class="fixed w-full bg-blue-800 top-0 left-0 right-0 z-50">
		<div class="relative w-full mx-auto px-4 sm:px-6">
			<div class="relative flex justify-between py-2 items-center xl:justify-start xl:space-x-10">
				<!-- Logo -->
				<div class="flex justify-start">
					<a class="cursor-pointer text-white">
						<span>Logo</span>
					</a>
				</div>

				<!-- Cart icon -->
				<nav class="xl:flex xl:space-x-8 md:pr-10 xl:justify-end xl:w-full items-center">
					<div class="relative" @click="toggle">
						<CartIcon />
					</div>
				</nav>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import CartIcon from "~/components/svgs/CartIcon"

const active = ref<boolean>(false)

function toggle() {
	active.value = !active.value
}

</script>