"use client";
import React from "react";
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const CryptoChart = ({ cryptoSymbol }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${cryptoSymbol}/market_chart`,
          {
            params: {
              vs_currency: 'usd',
              days: '7',
              interval: 'daily',
            },
          }
        );

        const data = response.data.prices.map((priceData) => ({
          x: new Date(priceData[0]),
          y: priceData[1],
        }));

        setChartData({
          labels: data.map((entry) => entry.x.toLocaleDateString()),
          datasets: [
            {
              label: 'Price (USD)',
              data: data,
              borderColor: '#00bfff',
              fill: false,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [cryptoSymbol]);

  return (
    <div>
      <h2>Price Chart for {cryptoSymbol.toUpperCase()}</h2>
      <Line data={chartData} />
    </div>
  );
};

export default CryptoChart;


