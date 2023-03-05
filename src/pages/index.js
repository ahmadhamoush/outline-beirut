
import Description from "@/components/Description"
import Landing from "@/components/Landing"
import Menu from "@/components/Menu"
import Location from "@/components/Location"
import Head from "next/head"
import Navbar from "@/components/Navbar"
import { Parallax } from "react-scroll-parallax"
import { ParallaxProvider } from "react-scroll-parallax"
import ScrollToTop from "react-scroll-to-top";
export default function Home() {
  return (
    <>
      <Head>
        <title>Outline Beirut</title>
        <meta name="description" content="Outline is a newly opened spot in the heart of Gemmayze, and while it may seem like any other new discovery, this restaurant has quite the unique twist. Everything is in 2D! Dining at this spot will give your the full comic book experience<" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="appContainer">
        <Navbar />
     <div className="content">
      <ParallaxProvider>
      <Landing />
      <Parallax speed={-10}>
      <Description />
      <Menu />
      </Parallax>
      <Location />
      <ScrollToTop smooth />
      </ParallaxProvider>
     </div>
      </div>
    </>
  )
}
