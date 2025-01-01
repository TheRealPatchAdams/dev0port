"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import dynamic from 'next/dynamic';

// Dynamically load TensorFlow.js to prevent SSR issues
const tf = dynamic(() => import('@tensorflow/tfjs'), { ssr: false });

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function HaroldPage() {
  const [data, setData] = useState({
    voltage: 0,
    temperature: 0,
    snow_thickness: 0,
    acceleration: { x: 0, y: 0, z: 0 },
    yards_cleared: 0,
    sidewalk_ft: 0,
    snow_removed: 0,
  });

  const [history, setHistory] = useState([]);
  const [predictedSnowfall, setPredictedSnowfall] = useState(0);
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState({ temperature: 0, humidity: 0 });

  // Fetch user location
  const fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  // Fetch weather data based on location
  const fetchWeather = async () => {
    if (location) {
      try {
        const response = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
          params: {
            lat: location.latitude,
            lon: location.longitude,
            appid: "YOUR_API_KEY", // Replace with your OpenWeatherMap API key
            units: "metric", // Get temperature in Celsius
          },
        });
        setWeather({
          temperature: response.data.main.temp,
          humidity: response.data.main.humidity,
        });
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
  };

  // Predict snowfall using TensorFlow model
  const predictSnowfall = async (temp, humidity) => {
    try {
      const tfInstance = await tf;
      const model = await tfInstance.loadLayersModel('/snowfall-model.json'); // Ensure the model is in 'public' folder
      const input = tfInstance.tensor2d([[parseFloat(temp), parseFloat(humidity)]], [1, 2]);
      const prediction = model.predict(input);
      const predictedValue = prediction.dataSync()[0];
      console.log('Predicted Snowfall:', predictedValue);
      return predictedValue;
    } catch (error) {
      console.error('Error loading or using the TensorFlow model:', error);
      return 0; // Default to 0 in case of error
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  useEffect(() => {
    fetchWeather();
  }, [location]);

  useEffect(() => {
    const fetchPrediction = async () => {
      const temp = weather.temperature;
      const humidity = weather.humidity;
      const prediction = await predictSnowfall(temp, humidity);
      setPredictedSnowfall(prediction);
    };

    if (weather.temperature && weather.humidity) {
      fetchPrediction();
    }
  }, [weather]);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/data'); // Local backend URL
        setData(response.data);
        setHistory((prev) => [...prev.slice(-9), response.data.voltage]); // Track last 10 voltage readings
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }, 1000); // Fetch data every second
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-800 py-10">
      <div className="container mx-auto px-5">
        <h1 className="text-4xl text-white font-bold text-center">Harold's Digital Dashboard</h1>

        <div className="metrics-container mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="metric-card">
            <h3>Voltage</h3>
            <p>{data.voltage} V</p>
          </div>
          <div className="metric-card">
            <h3>Temperature</h3>
            <p>{data.temperature} °C</p>
          </div>
          <div className="metric-card">
            <h3>Snow Thickness</h3>
            <p>{data.snow_thickness} cm</p>
          </div>
          <div className="metric-card">
            <h3>Acceleration</h3>
            <p>X: {data.acceleration.x} m/s²</p>
            <p>Y: {data.acceleration.y} m/s²</p>
            <p>Z: {data.acceleration.z} m/s²</p>
          </div>
          <div className="metric-card">
            <h3>Yards Cleared</h3>
            <p>{data.yards_cleared} yards</p>
          </div>
          <div className="metric-card">
            <h3>Sidewalk Cleared</h3>
            <p>{data.sidewalk_ft} ft</p>
          </div>
          <div className="metric-card">
            <h3>Snow Removed</h3>
            <p>{data.snow_removed} kg</p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl text-white font-bold text-center">Voltage Over Time</h2>
          <Line
            data={{
              labels: Array.from({ length: 10 }, (_, i) => `T-${10 - i}s`),
              datasets: [
                {
                  label: 'Voltage',
                  data: history,
                  borderColor: 'rgba(75,192,192,1)',
                  backgroundColor: 'rgba(75,192,192,0.2)',
                  fill: false,
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Voltage Over Time',
                },
              },
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Time',
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: 'Voltage (V)',
                  },
                },
              },
            }}
          />
        </div>

        <div className="mt-10">
          <h2 className="text-2xl text-white font-bold text-center">Predicted Snowfall</h2>
          <div className="metric-card bg-white text-black">
            <p>Temperature: {weather.temperature} °C</p>
            <p>Humidity: {weather.humidity} %</p>
            <p className="mt-3 text-xl">Predicted Snowfall: {predictedSnowfall.toFixed(2)} cm</p>
          </div>
        </div>
      </div>
    </div>
  );
}
