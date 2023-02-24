import React from "react";
import { Chart } from "react-google-charts";

const options = {
  chart: {
    title: "Company Performance",
  },
  animation: {
    duration: 600,
    easing: "out",
    startup: true,
  },
  // vAxis: {
  //   viewWindow: {
  //     max: 0,
  //     min: 150,
  //   },
  // },
  legend: { position: 'none' },
  backgroundColor: {
    fill: 'none',
    fillOpacity: '0.5'
  }
};

var constructPokeStats1 = function (stats) {
  let data = [['Element', 'level', { role: 'style' }]];
  stats.forEach(element => {
    let subData = [`${element.stat.name}`, element.base_stat, '#B01E68',];
    data.push(subData);
  });
  //console.log(data);
  // HP ATTACK DEFENSE SPECIALATTACK SPECIALDENFENSE SPEED
  try {
    data[1][0] = 'HP'; data[2][0] = 'ATK'; data[3][0] = 'DEF';
    data[4][0] = 'SP ATK'; data[5][0] = 'SP DEF'; data[6][0] = 'SPD';
  } catch (error) {
  }
  return data;
}

function Stats(props) {
  return (
    <Chart
      chartType="ColumnChart"
      width="330px"
      height="200px"
      
      data={constructPokeStats1(props.pokeStats)}
      options={options}

    />
  );
}


export default Stats;