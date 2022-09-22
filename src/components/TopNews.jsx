export default function TopNews(){
    const style={
        borderBottom:'1px solid grey',
        padding:'15px 10px',
        listStyleType: 'none',
        textDecoration:'none'
    }
    const linkstyle={
        color:'grey',
        textDecoration:'none',
        fontSize:'18px'
    }
    return(
        <div 
         style={{ 
        width: "470px",
        height: "370px",
      }}>
            <ul>
                <li style={{display:'flex' , justifyContent:'space-between',borderBottom:'1px solid grey',
        padding:'10px 10px'}}>
                    <span style={{fontSize:'30px'}} >Top news</span>
                    <a href="https://codepen.io/Tubbie/pen/yKeJyQ" style={linkstyle} >+More</a>
                </li>
                <li style={style}> <a href="https://codepen.io/Tubbie/pen/yKeJyQ" style={linkstyle}> Squid lomo Kickstarter art lomo Kickstarter art party cronut scenester.</a></li>
                <li style={style}> <a href="https://codepen.io/Tubbie/pen/yKeJyQ" style={linkstyle}> Gastropub distillery Marfa farm-to-table, Etsy Truffaut fingerstache.</a></li>
                <li style={style}> <a href="https://codepen.io/Tubbie/pen/yKeJyQ" style={linkstyle}>Organic raw denim lomo Kickstarter art Vice keffiyeh four loko.</a> </li>
                <li style={style}> <a href="https://codepen.io/Tubbie/pen/yKeJyQ" style={linkstyle}>Organic raw denim Vice keffiyeh lomo Kickstarter art lomo Kickstarter art four loko.</a> </li>
            </ul>
        </div>
    )
}