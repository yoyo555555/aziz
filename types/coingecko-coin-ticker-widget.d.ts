// coingecko-coin-ticker-widget.d.ts

declare module 'coingecko-coin-ticker-widget' {
    interface CoinGeckoCoinTickerWidgetProps {
      coinId: string;
      currency: string;
      locale?: string;
      backgroundColor?: string;
    }
  
    class CoinGeckoCoinTickerWidget extends React.Component<CoinGeckoCoinTickerWidgetProps> {}
  
    export default CoinGeckoCoinTickerWidget;
  }
  