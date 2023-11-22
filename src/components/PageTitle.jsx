import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const PageTitle = ({ title }) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: { sm: "42px", xs: "24px" },
          fontWeight: "bold",
          color: "white",
          mb: { sm: "34px", xs: "24px" },
        }}
      >
        {title}
      </Typography>
    </Box>
  )
}

export default PageTitle
