import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Navbar } from "./components/navbar/navbar";

export default function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Navbar />
    </MantineProvider>
  );
}
