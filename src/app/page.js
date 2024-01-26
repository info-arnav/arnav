export default function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          minHeight: "calc(100vh - 115px)",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="home_banner banner"
      >
        <div
          style={{
            flex: 1,
            maxWidth: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <img
            src="/assets/avatar_lid.png"
            alt="Avatar"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
            className="Under the lid avatar"
          ></img>
        </div>
        <div
          style={{
            flex: 1,
            maxWidth: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <h1>Hi! I am Arnav</h1>
          <h2>Welcome to my website</h2>
          <p>
            So, I'm a tech junkie caught in the awkward dance of
            not-quite-a-teen, not-quite-an-adult. Life's a puzzle, and I'm the
            guy trying to assemble it with mismatched pieces. Buckle up, 'cause
            this rollercoaster ain't got no chill!
          </p>
        </div>
      </div>
      <center>
        <svg class="arrows">
          <path class="a1" d="M0 0 L7.935 7.935 L15.87 0"></path>
          <path class="a2" d="M0 10 L7.935 17.935 L15.87 10"></path>
          <path class="a3" d="M0 20 L7.935 27.935 L15.87 20"></path>
        </svg>
      </center>
      <div
        style={{
          display: "flex",
          minHeight: "calc(100vh - 100px)",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="portfolio_banner banner"
      >
        <div
          style={{
            flex: 1,
            maxWidth: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <img
            src="/assets/avatar_standing.png"
            alt="Standing Avatar"
            atyle={{ maxHeight: "100%", maxWidth: "100%" }}
          ></img>
        </div>
        <div
          style={{
            flex: 1,
            maxWidth: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            overflow: "hidden",
            wordBreak: "break-word",
          }}
        >
          <h1 style={{ fontSize: 75 }}>Portfolio</h1>
        </div>
      </div>
    </>
  );
}
