'use client'
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';


const CoinTickerWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widgets.coingecko.com/coingecko-coin-ticker-widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Helmet>
        <script src="https://widgets.coingecko.com/coingecko-coin-ticker-widget.js" async />
      </Helmet>
      <coingecko-coin-ticker-widget coin-id="bitcoin" currency="usd" locale="en"></coingecko-coin-ticker-widget>
    </div>
  );
};

export default CoinTickerWidget;
