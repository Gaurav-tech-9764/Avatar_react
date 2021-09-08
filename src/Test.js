
const myPromise = new Promise((resolve , reject) =>{

  if(false){
    setTimeout(() => 
    {
      resolve("i have Resolved");
  
    },2000);
 }
 else{
   reject("i have rejected");
 }

});

myPromise.then(value => console.log(value)).catch(rejectvalue => console.log(rejectvalue))