
const route = new Map();
const link = document.querySelectorAll("a");

function renderTo(element,content){

	element.innerHTML = content;

}

function checkRoute(path){

	if(route.has(path)){

		history.pushState(null,null,location.origin+path);
		route.get(path)();

	}else{

		console.warn("route tidak di temukan");

	}

}

function checkURL(){

	const currentRoute = location.pathname;
	return currentRoute;

}

function addRoute(path,handler){

	if(typeof handler === "function"){

		route.set(path,handler);

	}else{

		console.warn("handler harus berupa fungsi");

	}

}

link.forEach(element =>{

	element.onclick = function(e){

		checkRoute((new URL(this.href)).pathname);
		e.preventDefault();

	}

});

addRoute("/home",function(){

	renderTo(document.querySelector('#content'),`

		<h1>Hello your in home</h1>

	`);

});

addRoute("/about",function(){

	renderTo(document.querySelector('#content'),`

		<h1>create by daberdev</h1>

	`);

});


window.onload = ()=>{

	checkRoute(checkURL());

}

window.onpopstate = ()=>{

	checkRoute(checkURL());

}
