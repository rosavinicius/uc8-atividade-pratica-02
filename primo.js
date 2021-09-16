
for (let i=1; i <=50; i++){
    let qntdDivisores = 1
    for(let j=i; j>1; j--){
        if (i%j==0){
            qntdDivisores++
        }
    }
    if (qntdDivisores == 2)
        console.log(i)
}