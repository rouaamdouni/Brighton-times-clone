export default function WeatherState(props) {
    const pic1 = 'https://s17.postimg.cc/gad1pvkjz/weather.png'
    const sunny = 'https://s17.postimg.cc/jtyzfxfmn/sunny.png'
    const cloudy = 'https://s17.postimg.cc/pi5a6v1zj/cloudy.png'
    const rainy = 'https://s17.postimg.cc/9jwkgri27/rain.png'
    const style={display:'flex',flexDirection:'column',padding:'10px 10px',justifyContent:'center',alignItems:'center'}
    return (
        <div style={{paddingTop:'10px'}} >
            <div>
                <p style={{fontSize:'35px'}}>Brighton, UK</p>
                <b style={{fontSize:'25px'}}>Sunny</b>
            </div>
            <div style={{display:'flex', padding:'20px 10px'}}>
                <img src={pic1} alt="" />
                <p style={{fontSize:'35px',fontWeight:'bold'}}>13°C</p>
            </div>
            <div style={{display:'flex',padding:'10px 0px',justifyContent:'center',alignItems:'center'}}>
            <div style={style}>
                <p>Mon</p>
                <img src={sunny} alt="" />
                <p>13°C</p>
            </div>
            <div style={style}>
                <p>tues</p>
                <img src={cloudy} alt="" />
                <p>13°C</p>
            </div>
            <div style={style}>
                <p>wed</p>
                <img src={cloudy} alt="" />
                <p>13°C</p>
            </div>
            <div style={style}>
                <p>thur</p>
                <img src={rainy} alt="" />
                <p>13°C</p>
            </div>
            <div style={style}>
                <p>fri</p>
                <img src={sunny} alt="" />
                <p>13°C</p>
            </div>
            </div>
           
        </div>
    )
}

 