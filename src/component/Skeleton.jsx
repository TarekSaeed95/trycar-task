import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";

function SkeletonComponent() {
  return (
    <Card sx={{ m: 2 }}>
      <div className="flex">
        <Skeleton
          sx={{ height: 255 }}
          width="35%"
          animation="wave"
          variant="rectangular"
        />
        <div className="w-[65%]">
          <CardContent>
            <Skeleton
              animation="wave"
              height={30}
              width="30%"
              style={{ marginBottom: 6 }}
            />
            <Skeleton
              animation="wave"
              height={20}
              width="100%"
              style={{ marginTop: 20, marginBottom: 6 }}
            />
            <Skeleton
              animation="wave"
              height={20}
              width="80%"
              style={{ marginBottom: 6 }}
            />
            <Skeleton
              animation="wave"
              height={20}
              width="10%"
              style={{ marginBottom: 6 }}
            />
          </CardContent>
        </div>
      </div>
    </Card>
  );
}

export default SkeletonComponent;
