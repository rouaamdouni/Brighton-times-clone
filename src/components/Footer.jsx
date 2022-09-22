export default function Footer(){
    
    return(
        <div>
             <ul style={{display:'flex' , alignItems:'center',justifyContent:'space-around', padding:'10px 300px',borderTop:'1px solid grey',listStyle:'none'}}>
          <li ><a href="#" style={{textDecoration:'none',color:'grey'}}>Contact us</a></li>
          <li ><a href="#" style={{textDecoration:'none',color:'grey'}}><span class="hide">Follow us on </span>Twitter</a></li>
          <li ><a href="#" style={{textDecoration:'none',color:'grey'}}>RSS</a></li>
        </ul>
        </div>
    )
}