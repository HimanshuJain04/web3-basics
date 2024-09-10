"use client"
import React, { useEffect, useState } from 'react'
import crypto from "crypto"



export default function Page() {
    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState("");

    useEffect(()=>{
        if(inputValue){
            setResult(crypto.createHash("sha256").update(inputValue).digest("hex"));

        }else{
            setResult("");
        }
    },[inputValue])

  return (
    <div className='flex gap-10 flex-col items-center justify-center h-screen w-full'>
        <div>
        <input type="text" className='p-3 text-black outline-none border-2 border-blue-600' value={inputValue} onChange={(e) => setInputValue(e.target.value)}     
  />
        </div>

        <div>
<p>{result}</p>
        </div>

    </div>
  )
}

