export function len(variable){
  if (!Array.isArray(variable) && (typeof variable !== 'object' || variable === null)){ 
    throw new TypeError ('Аргумент должен быть массивом или обьектом')
  }
  
  let count = 0
  
  if (Array.isArray(variable)){
    
    for (const num of variable){
      
      count++
    
    }
  
  } 

  else if (typeof variable === 'object') {
    
    for (const num in variable){
      
      count++
    
    }
  
  }
  
  return count
}
