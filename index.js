// let boys = ['Samir','Damir','Farzod']
// let girls = ['Kumush','Sahlo','Amina']

// function gender(arr) {
//     for(let item of arr) {
//         console.log('Salam ' + item);
//     }
// }

// gender(boys)
// gender(girls)


// const user = {
//     name: 'Alex',
//     age: 29,
//     isMarried: false
// }

// const user_two ={
//     name: 'Bobur',
//     age: 17,
//     isMarried:true
// }


// function checkuser(data) {
//     if (data.name.length % 2 === 0 && data.age <= 18) {
//             console.log('Sorry', data.name);
//         } else {
//             console.log('welcome', data.name);
//         }
// }
// checkuser(user)
// checkuser(user_two)


// function getMax(p1,p2,p3) {
//     let arr = [p1,p2,p3]
//     let longest = ''
     
//     for(let item of arr){
//         if (item.length > longest.length) {
//             longest = item
//         }
//     }
//     console.log(longest);
// }

// getMax('Alex','gggggggg','Michael')









let number = [9,1,2,10,60]
let unsorted = true

function sort(number) {
    
    while (unsorted === true) {
        unsorted = false
        
            for(let i = 0; i < number.length; i++ ){
                if(number [i] > number[i + 1]) {
                    let save = number[i]
                    number[i] = number[i + 1]
                    number[i + 1] = save
                    unsorted = true
                }
            }    
    }
}
console.log('Unsorted:',number);
sort(number)
console.log('Sorted:',number);






