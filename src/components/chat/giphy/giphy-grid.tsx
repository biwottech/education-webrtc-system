import React, { useState, useEffect, useRef, useMemo } from "react";
import { render } from "react-dom";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { IGif } from "@giphy/js-types";
import { Gif, Grid } from "@giphy/react-components";
import { useAsync } from "react-async-hook";
import ResizeObserver from "react-resize-observer";
import { ChatMessage } from '@/utils/types';
import { observer } from 'mobx-react';

export interface GiphyGridInterface {
  onGifClick: (gif: any, evt: any) => void
}

export const GiphyGrid : React.FC<GiphyGridInterface> = observer(({ onGifClick }) => {
  
  const giphyApiKey : string = process.env.REACT_APP_GIPHY_API_KEY || '';
  const giphySearch = new GiphyFetch(giphyApiKey);
  const fetchGifs = (offset: number) =>
    giphySearch.trending({ offset, limit: 10 });
  const [width, setWidth] = useState(window.innerWidth);

  return (
    <>
      <Grid
        onGifClick={onGifClick}
        fetchGifs={fetchGifs}
        width={width}
        columns={3}
        gutter={6}
      />
      <ResizeObserver
        onResize={({ width }) => {
          setWidth(width);
        }}
      />
    </>
  );
});