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
        className="home_banner"
      >
        <div
          style={{
            flex: 1,
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
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <h1
            style={{
              fontWeight: "bold",
              fontSize: 109.08,
              lineHeight: 1,
              marginBottom: 5,
            }}
          >
            Hi! I am Arnav
          </h1>
          <h2
            style={{
              fontSize: 16,
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: 7,
              marginBottom: 10,
            }}
          >
            Welcome to my website
          </h2>
          <p style={{ marginTop: 10, fontSize: 16 }}>
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
        className="portfolio_banner"
      >
        <div
          style={{
            flex: 1,
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <h1
            style={{
              fontWeight: "bold",
              fontSize: 109.08,
              lineHeight: 1,
              marginBottom: 5,
            }}
          >
            Portfolio
          </h1>
        </div>
      </div>
    </>
  );
}
