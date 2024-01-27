export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 150px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <center>
        <img src="/assets/error.png" style={{ width: "100%" }}></img>
        <h2 style={{ fontWeight: "bold", fontSize: 50 }}>Error 404</h2>
        <p style={{ fontSize: 20 }}>Page not Found</p>
      </center>
    </div>
  );
}
