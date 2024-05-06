import { useNavigate } from "react-router-dom";
import Button from "./Button";

function BackButtion() {
  const navigate = useNavigate();
  return (
    <Button
      className="bg-slate-100 py-2.5 text-blue-500 underline"
      onClick={() => navigate(-1)}
    >
      👈 Back
    </Button>
  );
}

export default BackButtion;
