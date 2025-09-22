import { useState, useEffect } from "react";

export default function SearchInput({ onSearch }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(query);
    }, 500);

    return () => clearTimeout(timeout);
  }, [query, onSearch]);

  return (
    <div className="mb-4">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md 
                   transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="🔍 Buscar por Nombre, perfil o intereses"
      />
    </div>
  );
}