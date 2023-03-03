import { useSession } from 'next-auth/react';
import { signOut } from "next-auth/react"
import React from 'react'

export default function Profile() {
    const { data: session } = useSession()
    return (
        <div className='w-full h-screen bg-teal-500 flex items-center justify-center flex-col'>
            <p className='text-4xl mb-4 font-semibold tracking-widest uppercase text-white'>Welcome {session?.user?.name} to Profile Page</p>
            <p className='text-base mb-4 font-semibold tracking-widest uppercase text-white'>{session?.user?.email}</p>
            <button onClick={signOut} className='text-base font-semibold tracking-widest uppercase bg-red-500 border-red-600 border rounded hover:bg-transparent  px-4 py-2 transition-all duration-700 text-white'>Logout</button>
        </div>
    )
}

