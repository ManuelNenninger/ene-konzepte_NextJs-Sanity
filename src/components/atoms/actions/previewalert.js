import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Link from "next/link";

export default function PreviewAlert() {
  return (
    <>
      <Alert severity="info" sx={{ zindex: 10 }}>
        <AlertTitle>INFO</AlertTitle>
        You are in Preview Mode. Here you see the unsaved changes. —{" "}
        <strong>
          {" "}
          <Link href="/api/exit-preview">Leave Preview Mode</Link>
        </strong>
      </Alert>
    </>
  );
}
