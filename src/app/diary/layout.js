export const metadata = {
  title: "Arnav's Diary",
  description:
    "Arnav's Daily Tech Diary - Explore my evolving tech journey through daily entries. From innovative projects to tech insights, witness the daily updates that shape my tech world. Stay connected to the pulse of technology!",
  manifest: "https://www.arnavgupta.net/manifest.json",
  openGraph: {
    title: "Arnav's Diary",
    description:
      "Arnav's Daily Tech Diary - Explore my evolving tech journey through daily entries. From innovative projects to tech insights, witness the daily updates that shape my tech world. Stay connected to the pulse of technology!",
    url: "https://www.arnavgupta.net",
    siteName: "Arnav Gupta",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arnav's Diary",
    description:
      "Arnav's Daily Tech Diary - Explore my evolving tech journey through daily entries. From innovative projects to tech insights, witness the daily updates that shape my tech world. Stay connected to the pulse of technology!",
    creator: "@arnav9560000",
  },
};

export default function DiaryLayout({ children }) {
  return <>{children}</>;
}
