import { Card, Container } from "@mui/material"
import CardTitle from "components/CardTitle"
import PageTitle from "components/PageTitle"

function App() {
  return (
    <Container
      maxWidth="xs"
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
      </Card>
    </Container>
  )
}

export default App
