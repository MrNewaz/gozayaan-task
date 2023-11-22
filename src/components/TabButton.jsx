import { Button } from "@mui/material"

const TabButton = ({ chart, item, setChart }) => {
  return (
    <Button
      color="inherit"
      variant={chart === item.period ? "contained" : "text"}
      onClick={() => setChart(item.period)}
      disableElevation
      sx={{
        textTransform: "none",
        fontSize: { sm: "12px", xs: "10px" },
        borderRadius: "16px",
        py: "8px",
        px: { sm: "10px", xs: "6px" },
        bgcolor: chart === item.period ? "var(--card-bg)" : "transparent",
        color: chart === item.period ? "var(--active)" : "var(--inactive)",
        "&:hover": {
          bgcolor: "var(--card-bg)",
          color: "var(--inactive)",
        },
      }}
      key={item.period}
    >
      {item.period}
    </Button>
  )
}

export default TabButton
