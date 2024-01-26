export const metadata = {
  title: "Arnav's Control Room",
  description:
    "Arnav's Exclusive Tech Updates - Gain privileged access to behind-the-scenes content. Dive into my daily tech musings and exclusive updates available only to logged-in members. Stay in the loop with the latest tech happenings!",
  manifest: "https://www.arnavgupta.net/manifest.json",
  openGraph: {
    title: "Arnav's Control Room",
    description:
      "Arnav's Exclusive Tech Updates - Gain privileged access to behind-the-scenes content. Dive into my daily tech musings and exclusive updates available only to logged-in members. Stay in the loop with the latest tech happenings!",
    url: "https://www.arnavgupta.net",
    siteName: "Arnav Gupta",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arnav's Control Room",
    description:
      "Arnav's Exclusive Tech Updates - Gain privileged access to behind-the-scenes content. Dive into my daily tech musings and exclusive updates available only to logged-in members. Stay in the loop with the latest tech happenings!",
    creator: "@arnav9560000",
  },
};

export default function AdminLayout({ children }) {
  return <>{children}</>;
}
