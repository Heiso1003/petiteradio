import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/main.scss";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Player from "../src/components/common/player/Player";

const client = new ApolloClient({
  uri: "https://thomas.techniques-graphiques.be/backend/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      {/* <UserContext> */}
        <Component {...pageProps} />
        <Player />
      {/* </UserContext> */}
    </ApolloProvider>
  );
}

export default MyApp;
