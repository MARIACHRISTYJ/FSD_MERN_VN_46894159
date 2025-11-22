import React, { useState, useEffect } from "react";

export default function App() {
  const [query, setQuery] = useState("London");
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch search results when searchText changes
  useEffect(() => {
    if (searchText === "") return;

    setLoading(true);
    setResults([]);

    const url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&limit=5&search=" +
      encodeURIComponent(searchText);

    fetch(url)
      .then((res) => res.json())
      .then(async (data) => {
        const titles = data[1] || [];
        const desc = data[2] || [];
        const links = data[3] || [];

        // FETCH IMAGE FOR EACH TITLE
        const withImages = await Promise.all(
          titles.map(async (t, i) => {
            const imageURL = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
              t
            )}`;

            try {
              const imgRes = await fetch(imageURL);
              const imgData = await imgRes.json();

              return {
                title: t,
                description: desc[i],
                link: links[i],
                image: imgData.thumbnail ? imgData.thumbnail.source : null,
              };
            } catch {
              return {
                title: t,
                description: desc[i],
                link: links[i],
                image: null,
              };
            }
          })
        );

        setResults(withImages);
      })
      .finally(() => setLoading(false));
  }, [searchText]);

  const handleSearch = () => {
    if (!query.trim()) return;
    setSearchText(query);
  };

  return (
    <div className="wrapper">
      <div className="card">
        <h1 className="title">England Explorer </h1>
        <p className="subtitle">Discover the best places to visit in the UK.</p>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a place..."
          className="inputBox"
        />

        <button onClick={handleSearch} className="btn">
          Search
        </button>

        {loading && (
          <div className="loading">
            <div className="spinner"></div> Searching for places...
          </div>
        )}

        {!loading && results.length === 0 && (
          <p className="hint">Start your search above!</p>
        )}

        <div>
          {results.map((r, i) => (
            <div key={i} className="resultCard">
              {r.image && (
                <img src={r.image} alt={r.title} className="placeImage" />
              )}

              <h3>{r.title}</h3>
              <p>{r.description}</p>

              
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
}
