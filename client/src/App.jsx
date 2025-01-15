import { Button } from "./components/ui/button";

export default function App() {
  return (
    <>
      <Button onClick={() => window.alert("Hello")}>Click me</Button>
    </>
  );
}
