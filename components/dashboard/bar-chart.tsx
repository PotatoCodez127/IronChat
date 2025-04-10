"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

// Register Chart.js components
Chart.register(...registerables)

// Sample data for the bar chart
const data = {
  labels: ["Product Info", "Shipping", "Returns", "Pricing", "Availability", "Technical Support"],
  datasets: [
    {
      label: "Conversations",
      data: [1823, 1427, 1142, 983, 872, 647],
      backgroundColor: "rgba(15, 23, 42, 0.1)",
      borderColor: "rgba(15, 23, 42, 0.8)",
      borderWidth: 1,
    },
  ],
}

export function BarChart() {
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
          type: "bar",
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
