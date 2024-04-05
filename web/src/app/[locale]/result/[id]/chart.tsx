'use client'

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ChartProps {
  max: number;
}

export const Chart: React.FC<ChartProps> = ({ max }) => {
  const options = {
    legend: {
      show: false
    },
    chart: {
      toolbar: {
        show: false
      },
      fontFamily: 'Inter, sans-serif',
    },
    yaxis: {
      max
    },
    xaxis: {
      categories: ['Neuroticism', 'Extroversion', 'Opennes To Experience', 'Agreeableness', 'Conscientiousness'],
      labels: {
        style: {
          fontFamily: 'Inter, sans-serif',
        }
      }
    },
    plotOptions: {
      bar: {
        distributed: true
      }
    },
    fill: {
      colors: ['#9353d3', '#006FEE', '#f31260', '#f5a524', '#17c964']
    }
  }

  const series = [{
    name: 'You',
    data: [30, 40, 35, 50, 49]
  }]

  return (
    <>
      <ApexChart
        type="bar"
        options={options}
        series={series}
        height={350}
        width="100%"
      />
    </>
  )
}