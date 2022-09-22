export default function TopBar() {
    return (
      <div
        style={{
          padding: "10px 250px",
          display: "flex",
          alignItems: "flex-end",
          boxShadow: "0px 4px 4px gray"
        }}
      >
        <img
          src="https://s17.postimg.cc/i3kjs8kxb/city.png"
          style={{ width: "70px" }}
          alt=""
        />
        <span style={{ fontSize: "40px", fontFamily: "roboto" }}>
          The Brighton Times
        </span>
      </div>
    );
  }
