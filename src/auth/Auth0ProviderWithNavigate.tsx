import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const Auth0ProviderWithNavigate = ({ children }: Props) => {
  const navigate = useNavigate();

  // trim(): a stray tab or space pasted into a hosting dashboard would
  // otherwise be sent to Auth0 as part of the value and break login.
  const domain = import.meta.env.VITE_AUTH0_DOMAIN?.trim();
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID?.trim();
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL?.trim();
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE?.trim();

  if (!domain || !clientId || !redirectUri || !audience) {
    throw new Error("unable to initialise auth");
  }

  const onRedirectCallback = (appState?: AppState) => {
    navigate(appState?.returnTo || "/auth-callback");
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        audience,
      }}
      // Keep the session across full page loads (e.g. returning from Stripe
      // checkout). The default in-memory cache is wiped on redirect, and the
      // silent-auth fallback fails with blocked third-party cookies.
      cacheLocation="localstorage"
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
