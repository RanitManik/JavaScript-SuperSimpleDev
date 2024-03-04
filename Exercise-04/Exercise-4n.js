// Continuing from 4i, add onclick attributes to the two buttons:

// When clicking 'Add to cart', create a popup with the text 'Added'.

// When clicking 'Buy now', display the message 'Loading...' in the Console, and then create a popup with the text ' Purchased'.
document.body.innerHTML = `
<button onclick="alert('Added')" class="button-1">Add to cart</button>
<button onclick="console.log('Loading...');alert('Purchased');" class="button-2">Buy now</button>
<style>
.button-1 {
background-color: yellow;
}
.button-2 {
background-color: orange;
}
</style>
`