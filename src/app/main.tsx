import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Router } from "@/app/router"
import "@/app/style/index.css"
import Layout from "@/app/layout/Layout"
import PostsManagerPage from "@/pages/PostsManagerPage"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Layout>
        <PostsManagerPage />
      </Layout>
    </Router>
  </StrictMode>,
)