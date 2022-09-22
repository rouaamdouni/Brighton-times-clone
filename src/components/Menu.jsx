export default function Menu() {
    return (
      <ul
        style={{
          padding: "20px 350px",
          display: "flex",
          listStyle: "none",
          gap: "40px"
        }}
      >
      <MenuItem text="news" link="http://news" />
      <MenuItem text="events" link="http://news" />
      <MenuItem text="culture" link="http://news" />
      <MenuItem text="blog" link="http://news" />
    </ul>
  );
}

function MenuItem({ text, link }) {
  return (
    <li style={{ padding: "10px 60px" }}>
      <a style={{ color: "gray", textDecoration: "none" }} href={link}>
        {text.toUpperCase()}
      </a>
    </li>
  );
}