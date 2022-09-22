
export default function Table(){

    return(
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',
        padding:'15px 0px 10px 50px',width:'45%',}}>
         <BlueLine/>
         <WhiteLine/>
         <GreyLine/>
         <WhiteLine/>
         <GreyLine/>
         <WhiteLine/> 

        </div>
    )
}
function WhiteLine(){
    return(
        <div style={{display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        padding:'15px',
        width:'100%',}}>
        <p>Date</p>
        <p>Location</p>
        <p>Team</p>
        <p>Score</p>
        <p>Team </p>
    </div>
    )
}
function GreyLine(){
    return(
        <div style={{display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        padding:'15px',
        width:'100%',
        backgroundColor:'grey'}}>
        <p>Date</p>
        <p>Location</p>
        <p>Team</p>
        <p>Score</p>
        <p>Team </p>
    </div>
    )
}
function BlueLine(){
    return(
        <div style={{display:'flex',
        flexDirection:'row',
         color:'white',
        justifyContent:'space-around',
        alignItems:'center',
        padding:'15px',
        width:'100%',
        backgroundColor:"#4076B5"
        }}>
            <p>Date</p>
            <p>Location</p>
            <p>Team</p>
            <p>Score</p>
            <p>Team </p>
        </div>
    )
}