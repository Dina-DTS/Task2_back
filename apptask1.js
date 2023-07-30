
 
const forcast=require("./data1.js/forecast")

const country=process.argv[2]
const address=require("./data1.js/geocode")

address(country,(error,data)=>{
    console.log("Error ",error)
       console.log("Date ",data)

       if (data){
        
       forcast(data.long,data.longd,(error,data)=>{
        console.log("Error ",error)
        console.log("Date ",data)
    

})
       }
       else{
        console.log("There is no data to display")
       }

})