import React, { useContext } from "react";
import { Gif, Grid, SearchBar, // the search bar the user will type into
  SearchContext, // the context that wraps and connects our components
  SearchContextManager, // the context manager, includes the Context.Provider
  SuggestionBar } from "@giphy/react-components";
import { observer } from 'mobx-react';
import './giphy-grid.scss';

export interface GiphyGridInterface {
  onGifClick: (gif: any, evt: any) => void,
  setShowGifWindow: any
}

export const GiphyGrid : React.FC<GiphyGridInterface> = observer(({ onGifClick, setShowGifWindow }) => {
  
  const giphyApiKey : string = process.env.REACT_APP_GIPHY_API_KEY || '';

  // define the components in a separate function so we can
  // use the context hook. You could also use the render props pattern
  const GiphySearchComponents = () => {
    const { fetchGifs, searchKey } = useContext(SearchContext)
    return (
        <>
            <SearchBar />
            <SuggestionBar />
            <Grid key={searchKey} 
              columns={3} width={252} fetchGifs={fetchGifs} 
              onGifClick={(gif, evt) => { onGifClick(gif, evt); setShowGifWindow(false); }} 
            />
        </>
    )
  }
  // the search experience consists of the manager and its child components that use SearchContext
  const GiphySearch = () => (
    <SearchContextManager apiKey={giphyApiKey}>
        <GiphySearchComponents />
    </SearchContextManager>
  )

  return (
    <div className='giphy-search-window'>
      <GiphySearch />
    </div>
  );
});