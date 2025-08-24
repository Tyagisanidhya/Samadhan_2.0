let arr = [66,64,31,87,41];
let highest_val = arr[0];
for(let i=1;i<arr.length;i++){
    if(highest_val<arr[i]){
        highest_val=arr[i];
    }
}
console.log(highest_val);