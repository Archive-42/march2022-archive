function quickSort(arr) {
    let sort = [];
    let pivot = arr[ 0 ];
    for ( let i = 1; i < arr.length; i++ ) {
        if ( arr[ i ] < pivot ) {
            sort.push( arr[ i ] );
        }
    }
    sort.push( pivot );
    for ( let i = 1; i < arr.length; i++ ) {
        if ( arr[ i ] > pivot ) {
            sort.push( arr[ i ]
            );
            
        }
    }
    return sort;
}
let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
console.log( quickSort( arr.reverse() ) );

