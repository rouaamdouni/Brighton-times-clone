import WeatherState from "./WeatherState";
import NewsCard from "./NewCards";
import TopNews from "./TopNews";
import Table from "./Table"
import LatestNews from './LatestNews'
import Footer from "./Footer";
export default function Main() {
  return (
    <div style={{ margin: '10px 250px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.26)' }} >
      <div style={{ display: 'flex' }}>
        <NewsCard
          title="Absolutely astonishing breaking news!"
          descripton="Organic raw denim Vice keffiyeh lomo Kickstarter art lomo Kickstarter art four loko. Organic raw denim Vice keffiyeh lomo Kickstarter art lomo Kickstarter art four loko."
          bgImage="https://i.postimg.cc/dtW10PtT/dog-resizedimagehead.jpg"
        />
        <WeatherState />
      </div>
      <div style={{display:'flex',width:'100%',padding:'10px 20px'}}>
        <TopNews/>
        <Table/>
        </div>
      <LatestNews/>
      <Footer/>
    </div>
  )
}