import React, { useState } from "react";
import instance from "../axios/api.js";

export default function UrlForm() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setShortUrl("");
    setLoading(true);

    try {
      const res = await instance.post("/api/shorten", { originalUrl });
      setShortUrl(res.data.shortUrl);
      setOriginalUrl("");
    } catch (err) {
      setError(err.response?.data?.message || "Server Error");
    }
    setLoading(false);
  };

  const handleCopy = () => {
    if (shortUrl) {
      navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl px-8 py-10 flex flex-col items-center animate-fade-in">
      <h1 className="text-2xl font-bold mb-6 text-indigo-600">
        UltraShorter 🚀
      </h1>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <input
          type="url"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          className="border border-indigo-200 p-3 rounded-md focus:ring-2 focus:ring-indigo-400 text-lg transition"
          placeholder="Paste your long URL here..."
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-gradient-to-r from-indigo-500 to-indigo-800 text-white text-lg py-3 rounded-md shadow hover:scale-105 transition"
        >
          {loading ? "Shortening..." : "🎯 Shorten It!"}
        </button>
      </form>

      {shortUrl && (
        <div className="mt-6 w-full max-w-lg bg-white border border-green-200 rounded-xl shadow-md p-5 animate-fade-in">
          <p className="text-green-700 font-semibold mb-2">
            Your Shortened URL
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href={shortUrl}
              className="flex-1 text-indigo-700 font-mono underline break-all bg-indigo-50 px-3 py-2 rounded-lg hover:bg-indigo-100 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              {shortUrl}
            </a>
            <button
              onClick={handleCopy}
              className={`flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg shadow transition ${
                copied ? "scale-105" : ""
              }`}
            >
              {copied ? "✅ Copied" : "📋 Copy"}
            </button>
          </div>
        </div>
      )}

      {error && (
        <div className="p-4 mt-6 w-full bg-red-50 border border-red-200 rounded text-red-700">
          {error}
        </div>
      )}
    </div>
  );
}
