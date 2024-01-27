import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "600", "800"],
});

export const metadata = {
  title: "Arnav Gupta",
  description:
    "Arnav's Tech Hub - Uncover my latest projects, insightful blogs, innovative apps, and must-visit sites. Delve into the world of tech exploration and stay updated with the latest in technology trends!",
  manifest: "https://www.arnavgupta.net/manifest.json",
  openGraph: {
    title: "Arnav Gupta",
    description:
      "Arnav's Tech Hub - Uncover my latest projects, insightful blogs, innovative apps, and must-visit sites. Delve into the world of tech exploration and stay updated with the latest in technology trends!",
    url: "https://www.arnavgupta.net",
    siteName: "Arnav Gupta",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.arnavgupta.net/meta/opengraph-image.jpg",
        width: 250,
        height: 250,
        alt: "Arnav Guptas Avatar Under a Lid",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arnav Gupta",
    description:
      "Arnav's Tech Hub - Uncover my latest projects, insightful blogs, innovative apps, and must-visit sites. Delve into the world of tech exploration and stay updated with the latest in technology trends!",
    creator: "@arnav9560000",
    images: {
      url: "https://www.arnavgupta.net/meta/twitter-image.jpg",
      alt: "Arnav Guptas Avatar Under a Lid",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navigation></Navigation>
        <center>
          <main
            style={{
              padding: 10,
              paddingTop: 80,
              width: "100%",
              maxWidth: 1000,
              textAlign: "left",
            }}
          >
            {children}
          </main>
          <Footer></Footer>
        </center>
      </body>
    </html>
  );
}
