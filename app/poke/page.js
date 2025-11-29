"use client";

import { useState, useMemo, useCallback } from "react";
import { usePokemonData } from "./hooks/usePokemonData";
import { usePokemonDetails } from "./hooks/usePokemonDetails";
import PageHeader from "./components/PageHeader";
import ErrorAlert from "./components/ErrorAlert";
import PokemonTable from "./components/PokemonTable";
import Pagination from "./components/Pagination";
import PokemonDetails from "./components/PokemonDetails";
import LoadingSpinner from "./components/LoadingSpinner";

const perPage = 20;

export default function PokeExplorer() {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    selectedPokemon,
    pokemonDetails,
    detailsLoading,
    activeTab,
    error: detailsError,
    setError: setDetailsError,
    fetchPokemonDetails,
    handleTabChange,
    clearDetails,
  } = usePokemonDetails();

  const {
    pokemons: pokeList,
    totalPages: pagesTotal,
    loading,
    error: listError,
    setError: setListError,
  } = usePokemonData(currentPage, perPage);

  const pageNow = currentPage;

  const handlePrevious = useCallback(() => {
    if (pageNow > 1) {
      setCurrentPage((prev) => prev - 1);
      clearDetails();
    } else {
    }
  }, [pageNow, clearDetails]);

  const handleNext = useCallback(() => {
    if (currentPage < pagesTotal) {
      setCurrentPage((prev) => prev + 1);
      clearDetails();
    }
  }, [currentPage, pagesTotal, clearDetails]);

  const isPreviousDisabled = useMemo(() => {
    return currentPage <= 1;
  }, [currentPage]);

  const isNextDisabled = useMemo(() => {
    if (!pagesTotal) return true;
    return currentPage === pagesTotal;
  }, [currentPage, pagesTotal]);

  const hasPokemons = useMemo(() => {
    return pokeList?.length > 0;
  }, [pokeList]);

  const error = listError || detailsError;

  const setError = (err) => {
    setListError(err);
    setDetailsError(err);
  };

  if (loading && !hasPokemons) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
          <div className="text-xl text-gray-700">Loading Pokémon...</div>
        </div>
      </div>
    );
  }

  let itemCount = pokeList?.length || 0;
  
  return (
    <div className="container mx-auto p-4 md:p-6 min-h-screen bg-gray-50">
      <PageHeader
        title="Pokemon Table"
      />

      <ErrorAlert error={error} onDismiss={() => setError(null)} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <PokemonTable
            pokemons={pokeList}
            currentPage={currentPage}
            itemsPerPage={perPage}
            selectedPokemon={selectedPokemon}
            onPokemonClick={fetchPokemonDetails}
            loading={loading}
            detailsLoading={detailsLoading}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={pagesTotal}
            onPrevious={handlePrevious}
            onNext={handleNext}
            isPreviousDisabled={isPreviousDisabled}
            isNextDisabled={isNextDisabled}
            itemCount={itemCount}
          />
        </div>

        <div className="flex  flex-col">
          {detailsLoading ? (
            <LoadingSpinner
              message="Loading details..."
              submessage="Fetching Pokémon information"
            />
          ) : (
            <PokemonDetails
              pokemonDetails={pokemonDetails}
              activeTab={activeTab}
              onTabChange={handleTabChange}
            />
          )}
        </div>
      </div>
    </div>
  );
}
