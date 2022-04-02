import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box py={4} backgroundColor="#f8f9fa" component="footer">
      <Container>
        <Typography align="center" variant="body2">
          Copyright ©2021 All rights reserved
        </Typography>
      </Container>
    </Box>
  );
}
