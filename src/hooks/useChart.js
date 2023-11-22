import { useCallback, useEffect, useState } from "react"

const useChart = (data) => {
  const [chart, setChart] = useState(data[0].period)
  const [chartBackground, setChartBackground] = useState("")
  const [totalExpenses, setTotalExpenses] = useState(0)
  const [isAnimated, setIsAnimated] = useState(false)

  const getColorForKey = (key) => {
    switch (key) {
      case "phone":
        return "var(--phone)"
      case "shopping":
        return "var(--shopping)"
      case "personal":
        return "var(--personal)"
      case "other":
        return "var(--other)"
      default:
        return "var(--card-bg)"
    }
  }

  const calculateGradient = useCallback(
    (period) => {
      const newData = data.find((d) => d.period === period)
      if (!newData) return

      let total = 0
      Object.entries(newData).forEach(([key, value]) => {
        if (key !== "period" && !isNaN(value)) {
          total += value
        }
      })

      setTotalExpenses(total)

      let start = 0
      let gradient = []

      Object.entries(newData)
        .reverse()
        .forEach(([key, value]) => {
          if (key === "period" || isNaN(value)) return
          const percentage = (value / total) * 100
          const end = start + percentage
          const color = getColorForKey(key)
          gradient.push(`${color} ${start.toFixed(2)}% ${end.toFixed(2)}%`)
          start = end
        })

      return `conic-gradient(${gradient.join(",")})`
    },
    [data]
  )

  useEffect(() => {
    setIsAnimated(true)
    setTimeout(() => {
      const gradient = calculateGradient(chart)
      setChartBackground(gradient)
      setIsAnimated(false)
    }, 300)
  }, [chart, calculateGradient])

  return {
    chart,
    setChart,
    chartBackground,
    totalExpenses,
    isAnimated,
    getColorForKey,
  }
}

export default useChart
