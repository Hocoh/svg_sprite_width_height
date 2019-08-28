import React, { Component } from 'react';

import cart from '~/static/svg/cart.svg?sprite'
import houses from '~/static/svg/houses.svg?sprite'
import kiwi from '~/static/svg/kiwi.svg?sprite'
 
console.log("icon: ", cart)

let style={
	height:"150px",
	width:"300px",
	backgroundColor:"orange"
}

// console.log("cart: ", cart)
// console.log("houses: ", houses)
console.log("kiwi: ", kiwi)

export default () => (
	<div style={style}> 
		my awesome svg div  
		<svg viewBox={cart.viewBox}>
			<use xlinkHref={`#${cart.id}`} />
		</svg>
		...
		<svg viewBox={cart.viewBox}>
			<use xlinkHref={`#${houses.id}`} />
		</svg>
		...
		<svg viewBox={cart.viewBox}>
			<use xlinkHref={`#${kiwi.id}`} />
		</svg>
	</div>
)