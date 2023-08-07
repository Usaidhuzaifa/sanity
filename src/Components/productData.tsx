import Image from 'next/image'
import {client} from "@/lib/sanityClient"
import { Image as IImage } from 'sanity';
import { urlForImage } from '../../sanity/lib/image';

const getProductData=async()=>{
 const res = await client.fetch(`*[_type=="product"]{
  _id,
  title,
  image,
  price,
  category ->{
    name
  }
}`);
 return res
}

interface IProduct {
  title:string,
  _id:string,
  description:string,
  image:IImage,
  price:number,
  category:{
    name:string
  }
}
  

export default async function ProductData() {
  const data:IProduct[] = await getProductData()
  console.log(data)
  return (
    <div className='grid grid-cols-[repeat(3,auto)] justify-center gap-x-10'>
    {
      data.map((items)=>(
        <>
       <div>
       <Image
       width={300}
       height={300}
       className='max-h-[300px] '
        src={urlForImage(items.image).url()} alt='product'/>
        <h1>{items.title}</h1>
        <h2>${items.price}</h2>
        <button className='border py-2 px-6 rounded bg-blue-700 text-white'>Add to Cart</button>
       </div>
        </>
      ))
    }
  </div>
  )
}
