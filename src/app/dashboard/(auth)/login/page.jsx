"use client"
import React from 'react'
import styles from "./page.module.css"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Login = () => {

  const session = useSession();
  const router = useRouter();

  if(session.status === "loading"){
    return <p>Loading...</p>
  }
  if(session.status === "authenticated"){
    router?.push("/dashboard")
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const email = e.target[0].value
    const password = e.target[1].value

    signIn("credentials", {email, password});
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input 
          type="email" 
          className={styles.input}
          placeholder='Email'
          required
        />
        <input 
          type="password" 
          className={styles.input}
          placeholder='Password'
          required
        />
        <button className={styles.button}>Login</button>
      </form>
      <button className={styles.googleBtn} onClick={()=>{signIn("google")}}>SignIn with Google</button>
      <Link href="/dashboard/register">Sign Up</Link>
    </div> 
  )
}

export default Login
