import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

export default function GitHub(){
    const data = useLoaderData();
    return(
        <>
            <h2 className="text-center bg-black text-white p-4 text-3xl">GitHub Followers: {data.followers}</h2>
        </>
    )
}
export async function GitCall(){
    const response = await fetch("https://api.github.com/users/Yesh287");
    return response.json();
}