import React from "react";
import { Chart } from "react-google-charts";

const data1 = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["PS", 1000, 400, 200],
  ["Ataque", 1170, 460, 250],
  ["Defensa", 660, 1120, 300],
  ["Ataque Especial", 1030, 540, 350],
  ["Defensa Especial", 1030, 540, 350],
  ["Velocidad", 1030, 540, 350]
];

var data = [
  ['Element', 'Density', { role: 'style' }],
  ['PS', 8.94, '#b87333'],            // RGB value
  ['Ataque', 10.49, 'silver'],            // English color name
  ['Defensa', 19.30, 'gold'],
  ['Ataque Especial', 19.30, 'gold'],
  ['Defensa Especial', 19.30, 'gold'],
  ['Velocidad', 20.20, 'color: #e5e4e2']// CSS-style declaration
];

data = [
  ["Element", "Density", { role: "style" }],
  ["Coppeer", 8.94, "#b87333"], // RGB value
  ["Silver", 10.49, "silver"], // English color name
  ["Gold", 19.3, "gold"],
  ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
];

const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
};

function Stats() {
  return (
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="500px"
      data={data}
      options={options}
    />
  );
}


export default Stats;