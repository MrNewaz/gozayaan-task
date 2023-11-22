import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const PieChartText = ({ isAnimated, total }) => {
  return (
    <Box
      sx={{
        transition: "all 0.3s ease-in-out",
        opacity: isAnimated ? 0 : 1,
      }}
    >
      <Typography
        sx={{
          fontSize: { sm: "40px", xs: "24px" },
          fontWeight: "bold",
        }}
      >
        $ {Number(total.toFixed(2)).toLocaleString().split(".")[0]}
        <Typography
          variant="p"
          sx={{
            color: "var(--decimals)",
            fontSize: { sm: "19px", xs: "14px" },
            fontWeight: "bold",
          }}
        >
          <Typography variant="p" fontFamily="Inter">
            .
          </Typography>
          {total.toFixed(2).split(".")[1]}
        </Typography>
      </Typography>
    </Box>
  )
}

export default PieChartText
