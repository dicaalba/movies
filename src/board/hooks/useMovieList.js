import useSWR from "swr";

const fetcher = async (url) => fetch(url).then((res) => res.json());
const API_KEY = "e08815ebb9a68b5816a9e3ae26b751e1"
const PAGE_LIMIT = 151;

export default function useMovieList(name) {
  // https://api.themoviedb.org/3/movie/popular?api_key=e08815ebb9a68b5816a9e3ae26b751e1&language=es-pe&page=1
  const uri = `https://api.themoviedb.org/3/movie/${name}?api_key=${API_KEY}&language=es-PE&page=1`;
  const { data: result, error } = useSWR(uri, fetcher);
  return { result, error };
}
