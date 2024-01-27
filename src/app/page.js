import BoxElement from "./components/grid_block";

export default function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          minHeight: "calc(100vh - 180px)",
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <p>Projects</p>
        <svg class="arrows" style={{ marginTop: 10 }}>
          <path class="a1" d="M0 0 L7.935 7.935 L15.87 0"></path>
          <path class="a2" d="M0 10 L7.935 17.935 L15.87 10"></path>
          <path class="a3" d="M0 20 L7.935 27.935 L15.87 20"></path>
        </svg>
      </div>
      <div
        className="project_grid"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 300px)",
          flexDirection: "column",
        }}
      >
        <div
          className="project_sub_grid"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a href="https://nsut.alumninet.in">
            <div
              className="project_box"
              style={{
                borderRadius: 20,
                flex: 1,
                maxWidth: 250,
                height: 350,
                padding: 20,
                backgroundColor: "#D9D9D9",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p style={{ fontWeight: "bold" }}>Nalum</p>
              <p style={{ fontSize: 14 }}>
                The official Alumni Portal of netaji Subhas University of
                Technology.
              </p>
              <div
                style={{
                  flex: 1,
                  backgroundImage: "url('/assets/nalum.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "bottom center",
                }}
              ></div>
            </div>
          </a>
          <a href="https://github.com/info-arnav/face-change">
            <div
              className="project_box"
              style={{
                borderRadius: 20,
                flex: 1,
                maxWidth: 250,
                height: 350,
                margin: 10,
                padding: 20,
                backgroundColor: "#5CE1E6",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p style={{ fontWeight: "bold" }}>Deep Fake</p>
              <p style={{ fontSize: 14 }}>
                A program to create deepfakes via face and text replacement.
              </p>
              <div
                style={{
                  flex: 1,
                  backgroundImage: "url('/assets/deepfake.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "bottom center",
                }}
              ></div>
            </div>
          </a>
          <div className="interchanged_one">
            <BoxElement></BoxElement>
          </div>
        </div>
        <div
          className="project_sub_grid"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="interchanged_two" style={{ display: "none" }}>
            <BoxElement></BoxElement>
          </div>
          <a href="https://daisforall.com">
            <div
              className="project_box"
              style={{
                borderRadius: 20,
                flex: 1,
                maxWidth: 250,
                height: 350,
                margin: 10,
                padding: 20,
                backgroundColor: "#FDF5EC",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p style={{ fontWeight: "bold" }}>DaisForAll</p>
              <p style={{ fontSize: 14 }}>
                An article sharing site, usually used by my family and friends.
              </p>
              <div
                style={{
                  flex: 1,
                  backgroundImage: "url('/assets/daisforall.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "bottom center",
                }}
              ></div>
            </div>
          </a>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: 50,
        }}
      >
        <p>Wanna Connect ?</p>
        <svg class="arrows" style={{ marginTop: 10 }}>
          <path class="a1" d="M0 0 L7.935 7.935 L15.87 0"></path>
          <path class="a2" d="M0 10 L7.935 17.935 L15.87 10"></path>
          <path class="a3" d="M0 20 L7.935 27.935 L15.87 20"></path>
        </svg>
      </div>
    </>
  );
}
