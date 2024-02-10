export const metadata = {
  title: "Arnav Gupta's Personal Space",
  description:
    "Arnav Gupta's Exclusive Tech Updates - Gain privileged access to behind-the-scenes content. Dive into my daily tech musings and exclusive updates available only to logged-in members. Stay in the loop with the latest tech happenings!",
  manifest: "https://www.arnavgupta.net/manifest.json",
  openGraph: {
    title: "Arnav Gupta's Personal Space",
    description:
      "Arnav Gupta's Exclusive Tech Updates - Gain privileged access to behind-the-scenes content. Dive into my daily tech musings and exclusive updates available only to logged-in members. Stay in the loop with the latest tech happenings!",
    url: "https://www.arnavgupta.net/admin",
    siteName: "Arnav Gupta",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.arnavgupta.net/meta/admin.jpg",
        width: 250,
        height: 250,
        alt: "Arnav Guptas Avatar Behind a Door",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arnav Gupta's Personal Space",
    description:
      "Arnav Gupta's Exclusive Tech Updates - Gain privileged access to behind-the-scenes content. Dive into my daily tech musings and exclusive updates available only to logged-in members. Stay in the loop with the latest tech happenings!",
    creator: "@arnav9560000",
    images: {
      url: "https://www.arnavgupta.net/meta/admin.jpg",
      alt: "Arnav Guptas Avatar Behind a Door",
    },
  },
};

export default function AdminLayout({ children }) {
  return <>{children}</>;
}
