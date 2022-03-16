var a = ['dog','dog','dog','cat','cat','elephant','pearot','pearot','pearot','pearot','pearot']
var count =0
var j=1
for (var i in a){
    if(a[i]===a[j]){
        j++
        count++
        console.log(a[i])
        }
    
}
// console.log(count)