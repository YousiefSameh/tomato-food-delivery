import Contact from "@components/AppComponents/Contact"
import DownloadApp from "@components/AppComponents/DownloadApp"
import ExploreMenu from "@components/AppComponents/ExploreMenu"
import FoodDisplay from "@components/AppComponents/FoodDisplay"
import Hero from "@components/AppComponents/Hero"
import { useState } from "react"

const Home = () => {
  const [ category, setCategory ] = useState<string>("All")
  return (
    <main>
      <Hero />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
      <DownloadApp />
      <Contact />
    </main>
  )
}

export default Home