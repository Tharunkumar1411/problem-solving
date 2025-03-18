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
