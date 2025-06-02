export default async function handler(req, res) {
  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "Missing NEWS_API_KEY in environment variables" });
  }

  const url = `https://newsapi.org/v2/everything?q=mutual%20funds&language=en&sortBy=publishedAt&pageSize=6&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data.articles) {
      return res.status(500).json({ error: "Invalid response from News API" });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("News API fetch error:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
