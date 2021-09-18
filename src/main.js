import App from './App.svelte';
import Navbar from './Navbar.svelte';

// const nav = new Navbar({
// 	target: document.body,
// });

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;