import "../../components/MainVideo/MainVideo.css"
import "./HomePage.css"

import MainVideo from "../../components/MainVideo/MainVideo"

import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"

const HomePage = () => {
  return (
    <div className="Home">
        <MainVideo/>
        <ItemListContainer />
    </div>

  )
}

export default HomePage