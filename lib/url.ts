import qs from "query-string";

type buildUrlWithQueryProps = {
  params: string;
  key: string;
  value: string;
};

/**
 * Builds a new URL by adding or updating a query parameter while preserving existing ones.
 */
export function buildUrlWithQuery({
  params,
  key,
  value,
}: buildUrlWithQueryProps) {
  const queryString = qs.parse(params);
  queryString[key] = value;
  return qs.stringifyUrl({
    url: window.location.pathname,
    query: queryString,
  });
}

type removeQueryFromUrlProps = {
  params: string;
  queryToRemove: string[];
};

/**
 * Removes specific query parameters from the URL while keeping others intact.
 */
export function removeQueryFromUrl({
  params,
  queryToRemove,
}: removeQueryFromUrlProps) {
  const queryString = qs.parse(params);

  queryToRemove.forEach((query) => {
    delete queryString[query];
  });

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: queryString,
    },
    { skipNull: true }
  );
}
