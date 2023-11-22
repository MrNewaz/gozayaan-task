import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const Legend = ({ data, getColorForKey }) => {
  return (
    <Box
      sx={{
        mt: { sm: "47px", xs: "32px" },
        display: "grid",
        gridTemplateColumns: {
          sm: "repeat(4, 1fr)",
          xs: "repeat(2, 1fr)",
        },
        gridTemplateRows: "repeat(2, auto)",
        gap: "13px",
        justifyItems: "start",
        alignItems: "start",
      }}
    >
      {Object.keys(data)
        .slice(1)
        .map((key) => (
          <Box
            key={key}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              gap: "13px",
            }}
          >
            <Box
              sx={{
                width: "37px",
                height: "13px",
                borderRadius: "33px",
                bgcolor: getColorForKey(key),
              }}
            />
            <Typography
              sx={{
                fontSize: { sm: "16px", xs: "14px" },
                color: "var(--text-legend)",
              }}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Typography>
          </Box>
        ))}
    </Box>
  )
}

export default Legend
