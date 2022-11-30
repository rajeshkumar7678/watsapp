var a=10;
var count=0;
for (var i=2; i<a;i++){
if(a%i==0){
count++;
}
}
if(count==0){
console.log("prime");
}
else{
console.log("not a prime");
}
