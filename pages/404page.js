import Layout from "@/components/layout";
import Link from "next/link";

export default function Page404() {
  return (
    <Layout
        title="Page not found"
    >
        <p className="error">Page not found</p>
        <Link legacyBehavior href='/'>
            <a className="error-enlace"> 
                Go Home
            </a>
        </Link>
    </Layout>
  )
}
