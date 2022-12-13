const { stdin, stdout } = require("process")
const readline =require("readline")
const line=readline.createInterface({
    input:stdin,
    output:stdout
})
line.question('Enter Name: ',async (e)=>{
    const data= await e
    console.log('Hello ',data)
    line.close()
})