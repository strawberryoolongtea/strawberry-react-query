import { useParams } from "react-router-dom";

export default function DetailPage() {
  const { id } = useParams();

  return <h1>Detail Page ID: {id}</h1>;
}
