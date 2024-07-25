// for (let i = 0; i<=10; i++){
//     console.log(i)
// }


function print10(i){
    if( i > 10){
        return
    }
    
    console.log(i)
    print10(i + 1)
}