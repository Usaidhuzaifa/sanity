import { NextRequest,NextResponse } from "next/server";
import { db,cartTable } from "@/lib/drizzle";


export const GET= async (request:NextRequest)=>{
try{
    const res =await db.select().from(cartTable)
    
    return NextResponse.json({res})
}catch(error){
     console.log(error)
     return NextResponse.json({message:""})
}
}