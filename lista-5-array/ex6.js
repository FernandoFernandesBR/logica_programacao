var arr = [10, 55, 77, 13, 15, 78, 09, 90, 34]


for( var i = 0; i < arr.length; i++ ) {
    
    for( var j = 0; j < arr.length - 1; j++ ){

        if( arr[j] > arr[j + 1]) {

            var aux = arr[j] 
            
            var aux2 = arr[j + 1]
        
           
            arr[j] = aux2
            arr[j + 1] = aux
            
        }
   
    }
    
} 
console.log(arr)




