import Typography from "@mui/material/Typography"

const CardTitle = ({ title }) => {
  return (
    <Typography
      sx={{
        fontSize: { sm: "24px", xs: "20px" },
        fontWeight: "bold",
        color: "text.secondary",
      }}
      gutterBottom
    >
      {title}
    </Typography>
  )
}

export default CardTitle
