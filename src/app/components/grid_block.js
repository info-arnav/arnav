export default function BoxElement() {
  return (
    <a href="https://www.itsdope.in/">
      <div
        className="project_box"
        style={{
          borderRadius: 20,
          flex: 1,
          maxWidth: 250,
          height: 350,
          margin: 10,
          padding: 20,
          backgroundColor: "#EBD5EA",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p style={{ fontWeight: "bold" }}>Dope</p>

        <p style={{ fontSize: 14 }}>
          An unoffical social media platform for NSUT freshers to get to know
          their batch mates.
        </p>
        <div
          style={{
            flex: 1,
            backgroundImage: "url('/assets/dope.png')",
            backgroundSize: "cover",
            backgroundPosition: "bottom center",
          }}
        ></div>
      </div>
    </a>
  );
}
