import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
   <main>
    <h2>This is Main Page</h2>
    <button>
    <Link href="/login">login</Link>
    </button>
   </main>
  )
}
