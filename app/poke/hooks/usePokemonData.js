import { useState, useEffect, useCallback } from 'react';

export function usePokemonData(currentPage, itemsPerPage = 20) {
  const pageSize = itemsPerPage;

  const [pokeList, setPokeList] = useState([]);
  const [pagesTotal, setPagesTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  const loadPokemons = useCallback(async () => {
    setIsLoading(true);

    setFetchError(null);

    try {
      let offset = (currentPage - 1) * pageSize;
      if (offset < 0) offset = 0;

      const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${offset}`;

      const response = await fetch(apiUrl, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(
          `Pokemon fetch failed: ${response.status} (${response.statusText})`
        );
      }

      const data = await response.json();

      if (!data || !data.results) {
        throw new Error("Unexpected API shape — missing results array");
      }

      const list = data.results || [];

      setPokeList(list);
      setPagesTotal(Math.ceil(data.count / pageSize));

      if (!Array.isArray(list)) {
        setPokeList([]);
      }
    } catch (err) {
      console.error("Error fetching Pokemon:", err);
      setFetchError(err.message);
      setPokeList([]);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, pageSize]);

  useEffect(() => {
    loadPokemons();
  }, [loadPokemons]);

  return {
    pokemons: pokeList,
    totalPages: pagesTotal,
    loading: isLoading,
    error: fetchError,
    setError: setFetchError
  };
}
