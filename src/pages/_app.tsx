import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import {QueryClient, QueryClientProvider} from "react-query";
import {RoomProvider} from "@/contexts/RoomProvider";
import {MovieListProvider} from "@/contexts/MovieListProvider";
import {UserProvider} from "@/contexts/UserProvider";
const queryClient = new QueryClient();


export default function App({ Component, pageProps }: AppProps) {
  return (
      <QueryClientProvider client={queryClient}>
          <RoomProvider>
              <UserProvider>
                  <MovieListProvider>
                      <Component {...pageProps} />
                  </MovieListProvider>
              </UserProvider>
          </RoomProvider>
      </QueryClientProvider>
  );
}
