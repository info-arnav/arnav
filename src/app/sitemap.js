export default function sitemap() {
  let links = [
    {
      url: "https://www.arnavgupta.net",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.arnavgupta.net/diary",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.arnavgupta.net/admin",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
  let cDate = new Date("2024-08-02");
  const date = new Date();
  while (cDate <= date) {
    const year = cDate.getFullYear();
    const month = String(cDate.getMonth() + 1).padStart(2, "0");
    const day = String(cDate.getDate()).padStart(2, "0");
    cDate.setDate(cDate.getDate() + 1);
    links.push({
      url: `https://www.arnavgupta.net/diary/${year}-${month}-${day}`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 1,
    });
  }
  return links;
}
