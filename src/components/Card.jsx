import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

export default function BasicCard() {
    return (
      <NavLink to='/dashboard'>
    <Card className="w-140 m-2">
      <CardContent className=" bg-black text-gray-100">
              <CardActions sx={{ backgroundColor: "#5b60ab" }}
              className="rounded-lg"
              >
          <CardActions gutterBottom sx={{ fontSize: 18, textAlign:"center" }}>
            Modern Web Application Development <span>enrolled</span>
          </CardActions>
        </CardActions>
 
        <Box>
          <Box className="flex  justify-between mt-2">
            <Typography variant="body2">Batch: 9</Typography>
            <Typography variant="body2">Roll: 503055</Typography>
          </Box>
          <Box className="flex  justify-between mt-2">
            <Typography variant="body2">Campus: Memon Society...</Typography>
            <Typography variant="body2">City: Hyderabad</Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions className="bg-black">
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
                  </NavLink>
  );
}
