

function prime(num){
	let count=0;
	for(let i=0; i<num.length; i++){
	
	if(num%i==0){
	count++
	}
	}
	
}

let x=prime(13);
if(x==true){
console.log("it is a prime");
}
else{
console.log("it is not a prime");
}

	