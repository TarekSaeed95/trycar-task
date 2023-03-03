import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function PaginationComponent({ page, handleChange }) {
  return (
    <Stack spacing={2} className="text-white">
      <Typography>Page: {page}</Typography>
      <Pagination
        count={10}
        page={page}
        size="large"
        color="primary"
        variant="text"
        onChange={handleChange}
      />
    </Stack>
  );
}

export default PaginationComponent;
