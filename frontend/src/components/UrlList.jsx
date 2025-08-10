import React, { useEffect, useState } from "react";
import instance from "../axios/api.js";

export default function UrlList() {
  const [urls, setUrls] = useState([]);

  const fetchUrls = async () => {
    try {
      const res = await instance.get("/api/admin/urls");
      setUrls(res.data);
    } catch (err) {
      console.error("Error fetching URLs", err);
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-8 bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">All Shortened URLs</h2>

      {/* Desktop / tablet view */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full min-w-[500px] bg-white rounded-lg shadow overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-indigo-200 via-blue-200 to-blue-100 sticky top-0">
              <th className="p-3 text-left">Short URL</th>
              <th className="p-3 text-left">Original URL</th>
              <th className="p-3 text-left">Visits</th>
            </tr>
          </thead>
          <tbody>
            {urls.map((url, i) => (
              <tr
                key={url._id}
                className={`border-t hover:bg-indigo-50 transition ${
                  i % 2 == 0 ? "bg-gray-200" : ""
                }`}
              >
                <td className="p-3">
                  <a
                    href={`http://localhost:8000/${url.shortCode}`}
                    onClick={() => {
                      setTimeout(fetchUrls, 1500);
                    }}
                    className="text-indigo-600 underline font-mono"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {`http://localhost:8000/${url.shortCode}`}
                  </a>
                </td>
                <td className="p-3 truncate max-w-xs" title={url.originalUrl}>
                  {url.originalUrl}
                </td>
                <td className="p-3 text-center">
                  <span className="bg-indigo-100 text-indigo-800 rounded px-2 py-1">
                    {url.visits}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile view */}
      <div className="sm:hidden space-y-4">
        {urls.map((url) => (
          <div
            key={url._id}
            className="border rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <p className="text-sm text-gray-500 mb-1">Short URL</p>
            <a
              href={`http://localhost:8000/${url.shortCode}`}
              onClick={() => {
                setTimeout(fetchUrls, 1500);
              }}
              className="text-indigo-600 underline font-mono break-all"
              target="_blank"
              rel="noreferrer"
            >
              {`http://localhost:8000/${url.shortCode}`}
            </a>

            <p className="text-sm text-gray-500 mt-3 mb-1">Original URL</p>
            <p className="text-gray-800 break-all">{url.originalUrl}</p>

            <p className="text-sm text-gray-500 mt-3 mb-1">Visits</p>
            <span className="bg-indigo-100 text-indigo-800 rounded px-2 py-1">
              {url.visits}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
