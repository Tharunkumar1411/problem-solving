let user = {
    name: 'John',
    address: {
        country: 'India',
        state: 'India',
        education: {
            school: "APS",
            year: 2021
        }
    }
};

function flatern(obj, parentKey) {
    let result = {};
    
    for(let keys in obj){
        let update = (parentKey) ? `${parentKey}.${keys}`: keys;
        
        if(typeof obj[keys] === 'object'){
            let temp = flatern(obj[keys], update);
            
            for(let childKeys in temp){
               result[childKeys] = temp[childKeys]
            }
        }else{
            result[update] = obj[keys];
        }
    }
    return result
}

const result = flatern(user, 'user');
console.log(result)


//method for remove duplicate
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5];
let map = new Map();
let removeDep = [];

function removeDuplicate(arr){
    for(let i=0; i<=arr.length-1; i++){
        if(!map.has(arr[i])){
            map.set(arr[i], 1);
            removeDep.push(arr[i])
        }else{
            let count = map.get(arr[i])
            map.set(arr[i], count+1);
            if(map.get(arr[i]) === 1){
                removeDep.push(arr[i])
            }
        }
    }
}

removeDuplicate(arr);
console.log(removeDep);