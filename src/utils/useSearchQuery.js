function useSearchQuery() {
  const queryParameters = new URLSearchParams(window.location.search)

  const queries = {}

  for (const query of queryParameters.entries()) {
    queries[query[0]] = query[1]
  }

  return queries
}

export default useSearchQuery