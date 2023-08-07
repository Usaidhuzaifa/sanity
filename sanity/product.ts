import { defineField } from "sanity";


export const product ={
 name:"product",
 type:"document",
 title:"Product",
 fields:[{
        name:"title",
        title:"Product_Title",
        type:"string"
 },
 {
       name:"description",
       title:"Description",
       type:"string"
},
{
       name:"price",
       title:"Product price",
       type:"number"
},
{
       name:"image",
       title:"Image",
       type:"image"
},
defineField(
       {
              name:"category",
              title:"Product category",
              type:"reference",
              to:[{
                     type:"category"
              }]
       }
)
]
}


