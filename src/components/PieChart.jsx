import Box from "@mui/material/Box"
import PieChartText from "./PieChartText"

const PieChart = ({ isAnimated, background, total }) => {
  return (
    <Box
      sx={{
        width: { sm: "264px", xs: "200px" },

        height: { sm: "264px", xs: "200px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          transition: "all 0.3s ease-in-out",
          width: isAnimated
            ? { sm: "264px", xs: "200px" }
            : { sm: "244px", xs: "180px" },
          height: isAnimated
            ? { sm: "264px", xs: "200px" }
            : { sm: "244px", xs: "180px" },
          background: background,
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            transition: "all 0.3s ease",
            background: "var(--card-bg)",
            width: "82%",
            height: "82%",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PieChartText isAnimated={isAnimated} total={total} />
        </Box>
      </Box>
    </Box>
  )
}

export default PieChart
