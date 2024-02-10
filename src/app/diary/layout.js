export const metadata = {
  title: "Arnav Gupta's Diary",
  description:
    "Arnav Gupta's Daily Tech Diary - Explore my evolving tech journey through daily entries. From innovative projects to tech insights, witness the daily updates that shape my tech world. Stay connected to the pulse of technology!",
  manifest: "https://www.arnavgupta.net/manifest.json",
  openGraph: {
    title: "Arnav Gupta's Diary",
    description:
      "Arnav Gupta's Daily Tech Diary - Explore my evolving tech journey through daily entries. From innovative projects to tech insights, witness the daily updates that shape my tech world. Stay connected to the pulse of technology!",
    url: "https://www.arnavgupta.net/diary",
    siteName: "Arnav Gupta",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.arnavgupta.net/meta/blogs.jpg",
        width: 250,
        height: 250,
        alt: "Arnav Guptas Avatar Reading a Newspaper",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arnav Gupta's Diary",
    description:
      "Arnav Gupta's Daily Tech Diary - Explore my evolving tech journey through daily entries. From innovative projects to tech insights, witness the daily updates that shape my tech world. Stay connected to the pulse of technology!",
    creator: "@arnav9560000",
    images: {
      url: "https://www.arnavgupta.net/meta/blogs.jpg",
      alt: "Arnav Guptas Avatar Reading a Newspaper",
    },
  },
};

export default function DiaryLayout({ children }) {
  return <>{children}</>;
}
