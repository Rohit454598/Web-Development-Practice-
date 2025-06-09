const coding=["C","CPP","JAVA","Python"]
//foreach
coding.forEach(   (item)=>{//callback functions donot have name
  console.log(item)
})

// other parameters of for each
coding.forEach(   (item,index,arr)=>{//callback functions donot have name
  console.log(item,index,arr)
})

const mycode=[
    {
      name:"rohit",
      rollno:1
    },
    {
        name:"rohan",
        rollno:2

    },
    {
       name:"Atharva",
       rollno:3
    }

]

mycode.forEach((obj)=>{
    console.log(obj.name)

})