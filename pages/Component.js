import { useSession, signIn, signOut } from "next-auth/react"
import { Router } from "next/router"
import Profile from "./Profile"

export default function Component() {
    const { data: session } = useSession()
    if (session) {
        return <Profile />
    }
    return Router.push('/')
}