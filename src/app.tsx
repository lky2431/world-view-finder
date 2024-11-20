import React from 'react';
import {createRoot} from 'react-dom/client';

import {APIProvider} from '@vis.gl/react-google-maps';
import MainMapView from "./components/main-map-view";
import './output.css';
import {Page, useGameStore} from "@/src/stores";
import HomePage from "@/src/components/home-page";

const API_KEY = (process.env.GOOGLE_MAPS_API_KEY as string);

const App = () => {

  const {page}=useGameStore()
  const nonAlphaVersionLoaded = Boolean(
      globalThis &&
      globalThis.google?.maps?.version &&
      !globalThis.google?.maps?.version.endsWith('-alpha')
  );

  if (nonAlphaVersionLoaded) {
    location.reload();
    return;
  }

  if(page==Page.game){
    return (
        <APIProvider apiKey={API_KEY} version={'alpha'}>
          <MainMapView />
        </APIProvider>
    )
  }

  return (
      <HomePage/>
  );
};
export default App;

export function renderToDom(container: HTMLElement) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}


