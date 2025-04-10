"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

// Register Chart.js components
Chart.register(...registerables)

// Generate dates for the last 30 days
const generateDates = () => {
  const dates = []
  const today = new Date()
  for (let i = 29; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(today.getDate() - i)
    dates.push(date.toLocaleDateString("en-US", { month: "short", day: "numeric" }))
  }
  return dates
}

// Generate random data with an upward trend
const generateData = () => {
  const baseValue = 500
  const data = []
  for (let i = 0; i < 30; i++) {
    // Create an upward trend with some randomness
    const value = baseValue + i * 10 + Math.floor(Math.random() * 100)
    data.push(value)
  }
  return data
}

// Sample data for the line chart
const data = {
  labels: generateDates(),
  datasets: [
    {
      label: "Conversations",
      data: generateData(),
      fill: false,
      borderColor: "rgba(15, 23, 42, 0.8)",
      tension: 0.1,
      pointRadius: 0,
      pointHoverRadius: 4,
    },
  ],
}

export function LineChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      // Create new chart
      const ctx = chartRef.current.getContext("2d")
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: "line",
          data: data,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  display: true,
                  drawBorder: false,
                },
              },
              x: {
                grid: {
                  display: false,
                  drawBorder: false,
                },
                ticks: {
                  maxRotation: 0,
                  autoSkip: true,
                  maxTicksLimit: 7,
                },
              },
            },
          },
        })
      }
    }

    // Cleanup
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return <canvas ref={chartRef} height={300} />
}
