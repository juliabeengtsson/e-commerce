export async function getProducts() {

	try {
		const response = await fetch(
			`https://fakestoreapi.com/products`, {
				method: "GET",
				mode: "cors",
				cache: "no-cache",
				headers: {
					"Content-Type": "application/json"
				}
			})

		const data = await response.json()
		return data
	} catch (error) {
		console.log(error)
	}
}