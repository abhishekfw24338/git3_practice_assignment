
function prime(num){
	let count=0;
	for(let i=0; i<num.length; i++){
	
	if(num%i==0){
	count++
	}
	}
if(count==2){
return true
}else{
return false
}	

let x=prime(13);
if(x==true){
console.log("it is a prime number")
}
else{
console.log("it is not a prime number")
}
	