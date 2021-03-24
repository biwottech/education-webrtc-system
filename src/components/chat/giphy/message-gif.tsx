import React, { useState } from 'react';
import { useAsync } from "react-async-hook";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Gif } from '@giphy/react-components';
import { IGif } from '@giphy/js-types';

export const MessageGif = (gifId: string) => {
  const giphyApiKey : string = process.env.REACT_APP_GIPHY_API_KEY || '';
  const giphyFetch = new GiphyFetch(giphyApiKey);

    const [gif, setGif] = useState<IGif | null>(null);
    useAsync(async () => {
      const { data } = await giphyFetch.gif(gifId);
      setGif(data);
    }, []);
    return gif && <Gif gif={gif} width={150} />;
}