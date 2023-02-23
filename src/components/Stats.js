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
  backgroundColor:{
    fill: 'none',
    fillOpacity: '0.5'
  }
};

var constructPokeStats2 = function (stats) {
  let data = [['Element', 'level', { role: 'style' }]];
  stats.forEach(element => {
    let subData = [`${element.stat.name}`, element.base_stat, '#B01E68'];
    data.push(subData);
  });
  return data;
}

var constructPokeStats = function(stats){
  let data = [['Element', 'level', { role: 'style' }],
  ['HP',stats[0].base_stat,'red'],
  ['ATTACK',stats[1].base_stat,'orange'],
  ['DEFENSE',stats[2].base_stat,'blue'],
  ['SPECIAL\nATTACK',stats[3].base_stat,'gray'],
  ['SPECIAL\nDEFENSE',stats[4].base_stat,'green'],
  ['SPEED',stats[5].base_stat,'orange']
]
  return data;
  
}

function Stats(props) {
  // constructPokeStats(props.pokeStats);
  return (
    <Chart
      chartType="ColumnChart"
      width= "330px"
      height="200px"
      data={constructPokeStats2(props.pokeStats)}
      options={options}
      
    />
  );
}


export default Stats;