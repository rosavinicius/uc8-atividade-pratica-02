let n1 = 0
let n2 =1 
let fibonacci = n1+n2

for (let i = 0; i<7; i++){
    console.log(fibonacci)
    n1=n2
    n2=fibonacci
    fibonacci = n1 + n2
}