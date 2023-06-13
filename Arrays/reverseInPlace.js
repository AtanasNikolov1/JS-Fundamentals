function reverseInPlace(arr){
    for (let i = 0; i < arr.length/2; i++) {
        let currentEl=arr[i];
        let lastEl=arr[arr.length-i-1];

        arr[i]=lastEl;
        arr[arr.length-i-1]=currentEl     
    }
    console.log(arr.join(" "));
}
reverseInPlace(['a', 'b', 'c', 'd', 'e'])