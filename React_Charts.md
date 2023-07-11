# React Chart

### Step 1: Set up a React Project

Start by setting up a new React project using Create React App. Open your terminal and run the following command:

```bash
npx create-react-app covid-charts-app
```

This will create a new directory named `covid-charts-app` with the basic structure of a React project.

### Step 2: Install Chart.js

Navigate to the project directory and install `Chart.js` and `react-chartjs-2` using npm:

```bash
cd covid-charts-app
npm i react-chartjs-2 chart.js
```

### Step 3: Create API Service

First remove all the unnecessary files from react basic setup.

In the `src` directory, create a new file called `apiService.js`.

This file will handle the API calls to covid-19 API.

Add the following code to the `apiService.js` file:

```js
const BASE_URL = "https://covid-19.dataflowkit.com";

export function fetchData(endpoint) {
  return fetch(`${BASE_URL}${endpoint}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
}

//export default fetchData;
```

#### Using Async and await way:

```js
export async function fetchData(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
```

### Step 4: Create Chart Components

Create a new file called `LineChart.js` in the `components` directory and add the following code:

**LineChart.js**:

```javascript
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { fetchData } from "../apiService";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

//Chart.register() function is used to register scales and elements with the Chart.js library.
Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

const LineChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetchData("/v1")
      .then((data) => {
        // console.log(data);

        //Sort the data based on total cases
        const sortedData = data.sort(
          (a, b) => b["Total Cases_text"] - a["Total Cases_text"]
        );

        //Retrieve only top 10 records excluding the world
        const top10Data = sortedData.slice(1, 11);

        //Retrieve labels of top 10 countries
        const labels = top10Data.map((country) => country.Country_text);

        //Retrieve total cases details by converting it to number by replacing comma
        const cases = top10Data.map((country) =>
          parseInt(country["Total Cases_text"].replace(",", ""))
        );

        // console.log(labels);
        // console.log(cases);

        //Create the chart data:
        const chartData = {
          labels: labels,
          datasets: [
            {
              label: "Total Cases",
              data: cases,
              fill: false,
              borderColor: "red",
              backgroundColor: "white",
            },
          ],
        };
        setChartData(chartData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h2>Global New Deaths</h2>
      {chartData && <Line data={chartData} />}
    </div>
  );
};

export default LineChart;
```

Similarly, create one more file called `BarChart.js` in the `components` directory and add the following code to the file:

**BarChart.js**:

```javascript
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { fetchData } from "../apiService";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
} from "chart.js";

//Chart.register() function is used to register scales and elements with the Chart.js library.
Chart.register(CategoryScale, LinearScale, PointElement, BarElement);

const BarChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetchData("/v1")
      .then((data) => {
        // Filter out entries with "N/A" in Total Recovered_text
        const filteredData = data.filter(
          (country) => country["Total Recovered_text"] !== "N/A"
        );

        //Sort the data based on total recovered
        const sortedData = filteredData.sort(
          (a, b) => b["Total Recovered_text"] - a["Total Recovered_text"]
        );

        //Retrieve only top 10 records excluding the world
        const top10Data = sortedData.slice(1, 11);

        //console.log(top10Data);

        //Retrieve labels of top 10 countries
        const labels = top10Data.map((country) => country.Country_text);

        //Retrieve total cases details by converting it to number by replacing comma
        const cases = top10Data.map((country) =>
          parseInt(country["Total Recovered_text"].replace(",", ""))
        );

        //Create the chart data
        const chartData = {
          labels: labels,
          datasets: [
            {
              label: "New Recovered",
              data: cases,
              backgroundColor: "rgba(75, 192, 192, 0.6)",
            },
          ],
        };
        setChartData(chartData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h2>Global New Recovered</h2>
      {chartData && <Bar data={chartData} />}
    </div>
  );
};

export default BarChart;
```

### Step 5: Modify App component

Open the `src/App.js` file and replace its content with the following code:

```javascript
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";

function App() {
  return (
    <div>
      <LineChart />
      <BarChart />
    </div>
  );
}

export default App;
```

### Step 6: Run the app

Save all the files, return to the terminal, and run the following command in the project directory:

```bash
npm start
```

The app will open in your browser at `http://localhost:3000`, and you should see the line chart, and bar chart displaying COVID-19 data fetched from the API.

Please feel free to customize the components, styles, and API endpoints according to your needs.
