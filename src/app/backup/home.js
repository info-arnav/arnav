export default function Home() {
  return (
    <div>
      <div
        style={{
          width: "50%",
          maxWidth: 500,
          position: "fixed",
          top: "80px",
          height: "calc(100vh - 100px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <img
          src="/avatar.png"
          alt="Avatar Animation"
          style={{ maxHeight: "100%", maxWidth: "100%" }}
        ></img>
      </div>
      <div style={{ display: "flex" }}>
        <div className="empty" style={{ flex: 1 }}></div>
        <div className="content" style={{ flex: 1 }}>
          <div
            style={{
              minHeight: "calc(100vh - 80px)",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              padding: 20,
            }}
          >
            <h1 style={{ fontWeight: "bold", fontSize: "40px" }}>Hi!</h1>
            <h2 style={{ fontWeight: "bold", fontSize: 32 }}>I am Arnav</h2>
            <h3 style={{ fontSize: 24 }}>Welcome to my website</h3>
            <p style={{ marginTop: 10 }}>
              So, I'm a tech junkie caught in the awkward dance of
              not-quite-a-teen, not-quite-an-adult. Life's a puzzle, and I'm the
              guy trying to assemble it with mismatched pieces. Buckle up,
              'cause this rollercoaster ain't got no chill!
            </p>
          </div>
          <div
            style={{
              minHeight: "calc(100vh - 80px)",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              padding: 20,
            }}
          >
            <h1 style={{ fontWeight: "bold", fontSize: "40px" }}>
              My Projects
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
