import { Card, Container } from "@mui/material"
import CardTitle from "components/CardTitle"
import Legend from "components/Legend"
import PageTitle from "components/PageTitle"
import PieChart from "components/PieChart"
import TabBar from "components/TabBar"
import data from "data/expense-data.json"
import useChart from "hooks/useChart"

function App() {
  const {
    chart,
    setChart,
    chartBackground,
    totalExpenses,
    isAnimated,
    getColorForKey,
  } = useChart(data)

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: { sm: "center", xs: "flex-start" },
        alignItems: "center",
        flexDirection: "column",
        minHeight: { sm: "100dvh", xs: "auto" },
        py: 2,
      }}
    >
      <PageTitle title="Expense Chart" />
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          px: { sm: "37px", xs: "18px" },
          py: "32px",
          borderRadius: "40px",
        }}
      >
        <CardTitle title="Expenses" />

        <TabBar data={data} chart={chart} setChart={setChart} />

        <PieChart
          isAnimated={isAnimated}
          background={chartBackground}
          total={totalExpenses}
        />

        <Legend data={data[0]} getColorForKey={getColorForKey} />
      </Card>
    </Container>
  )
}

export default App
