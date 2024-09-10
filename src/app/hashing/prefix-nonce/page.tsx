"use client"
import React, { useEffect, useState } from 'react'
import crypto from "crypto"



export default function Page() {
    const [prefixValue, setPrefixValue] = useState("");
    const [matchValue, setMatchValue] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    function findNonce(){
        setLoading(true);
        let value = 0;
        while(true){
            const hash = crypto.createHash('sha256').update(prefixValue + value.toString()).digest('hex');

            if(hash.startsWith(matchValue)){
                setResult(value.toString());
                break;
            }
            value++;
        }
        setLoading(false)
    }

  return (
    <div className='flex gap-10 flex-col items-center justify-center h-screen w-full'>
        <div className='flex flex-col gap-5'>
            <label htmlFor='prefixValue'>Nonce Prefix</label>
            <input id="prefixValue" type="text" className='p-3 text-black outline-none border-2 border-blue-600' value={prefixValue} onChange={(e) => setPrefixValue(e.target.value)}     
                />

            <label htmlFor='MatchedValue'>Answer Prefix</label>
            <input id="prefixValue" type="text" className='p-3 text-black outline-none border-2 border-blue-600' value={matchValue} onChange={(e) => setMatchValue(e.target.value)}     
                />
        </div>

        <button disabled={loading} className='rounded-sm bg-red-500 py-3 px-6' onClick={findNonce}>Find Result</button>

        {
            loading && <p>Loading...</p>
        }

        <div>
            <p>{result}</p>
        </div>

    </div>
  )
}

