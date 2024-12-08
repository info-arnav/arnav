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
  return links;
}
