"use client";

import React, { useEffect, useState } from "react";

export default function SearchPage() {
  const [query, setQuery] = React.useState("");
  // @ts-ignore
  const [results, setResults] = React.useState<PageFindResult[]>([]);

  async function loadPagefind() {
    // @ts-ignore
    if (typeof window.pagefind === "undefined") {
      try {
        // pagefindの読み出しを行う
        const pf = await import(
          // @ts-expect-error pagefind.js generated after build
          /* webpackIgnore: true */ "/pagefind/pagefind.js"
        );
        // @ts-ignore
        window.pagefind = pf;
      } catch (e) {
        // todo: エラー処理
      }
    }
  }

  useEffect(() => {
    loadPagefind();
  }, []);

  async function searchQuery() {
    // @ts-ignore
    if (window.pagefind) {
      try {
        // @ts-ignore
        const search = await window.pagefind.search(query);
        console.log(search);
        setResults(search.results);
      } catch (e) {
        console.log(e);
      }
    }
  }

  return (
    <div className="w-96">
      <input
        className="bg-red-50 h-12 w-full my-3"
        type="text"
        placeholder="検索ワード入れる..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onInput={searchQuery}
      />
      <div id="results">
        {results.map((result) => (
          <ResultItem key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
}

// @ts-ignore
const ResultItem = ({ result }: { result: PageFindResult }) => {
  // @ts-ignore
  const [data, setData] = useState<PageFindData>();

  useEffect(() => {
    async function fetchData() {
      const data = await result.data();
      setData(data);
    }
    fetchData();
  }, [result]);

  return data ? (
    <div className="border bg-white rounded py-4 px-12">
      <p>{data.url}</p>
      <p>{data.content}</p>
    </div>
  ) : null;
};
