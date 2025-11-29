import { useState, useCallback } from "react";

export function usePokemonDetails() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [details, setDetails] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [error, _setError] = useState(null);

  const _devMode = false;

  const setError = useCallback((err) => {
    _setError(err);
  }, []);

  const fetchPokemonDetails = useCallback(
    async (url, name) => {
      if (!url || !name) {
        setError("Invalid Pokemon data");
        return;
      }

      setDetailsLoading(true);
      setSelectedPokemon(name);

      try {
        const requestUrl = url;
        const opts = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const res = await fetch(requestUrl, opts);

        if (!res.ok) {
          throw new Error(
            `Failed to fetch details (${res ? res.status : "no response"})`
          );
        }

        const data = await res.json();

        if (!data) {
          throw new Error("Empty response from details endpoint");
        }
        if (!data.types || !Array.isArray(data.types) || !data.moves) {
          throw new Error("Invalid Pokemon details received from API");
        }

        const parsed = {
          ...data,
          primaryType:
            (data.types[0] && data.types[0].type && data.types[0].type.name) ||
            null,
        };

        setDetails(parsed);

        setActiveTab(0);
        setError(null);
      } catch (err) {
        console.error("Error fetching Pokemon details:", err);
        setError(err.message);
        setDetails(null);
      } finally {
        setDetailsLoading(false);
      }
    },
    [setError]
  );

  const handleTabChange = useCallback(
    (index) => {
      if (!details || !Array.isArray(details.types)) {
        return;
      }

      if (typeof index !== "number") return;

      if (index >= 0 && index < details.types.length) {
        setActiveTab(index);
      } else {
      }
    },
    [details]
  );

  const clearDetails = useCallback(() => {
    setSelectedPokemon(null);
    setDetails(null);
    setActiveTab(0);
    setError(null);
  }, [setError]);

  return {
    selectedPokemon,
    pokemonDetails: details,
    details,
    detailsLoading,
    activeTab,
    error,
    setError,
    fetchPokemonDetails,
    handleTabChange,
    clearDetails,
  };
}
