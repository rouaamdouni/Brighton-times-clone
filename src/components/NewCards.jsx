export default function NewsCard({ title, descripton, bgImage }) {
    return (
      <div
        style={{ background: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          color: "white",
          width: "550px",
          height: "350px",
          position: 'relative',
          marginRight:'30px'
        }}
      >
        <div
          style={{
            background: "black",
            maxHeight: "200px",
            opacity: "0.8",
            padding: "0px 20px",
            position:'absolute',
            top:'50%',
            height:'180px'
          }}
        >
          <h3 style={{padding:'40px 0px'}}>{title}</h3>
          <p>{descripton}</p>
        </div>
      </div>
    );
  }