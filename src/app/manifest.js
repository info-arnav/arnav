export default function manifest() {
  return {
    name: "Arnav Gupta",
    short_name: "Arnav Gupta's Application",
    description:
      "Arnav's Tech Hub - Uncover my latest projects, insightful blogs, innovative apps, and must-visit sites. Delve into the world of tech exploration and stay updated with the latest in technology trends!",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
