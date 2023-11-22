import Box from "@mui/material/Box"
import TabButton from "./TabButton"

const TabBar = ({ data, chart, setChart }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        my: { sm: "25px", xs: "18px" },
        bgcolor: "var(--bg-tab)",
        px: { sm: "32px", xs: "24px" },
        py: { sm: "12px", xs: "8px" },
        borderRadius: "30px",
      }}
    >
      {data.map((item) => (
        <TabButton chart={chart} item={item} setChart={setChart} />
      ))}
    </Box>
  )
}

export default TabBar
