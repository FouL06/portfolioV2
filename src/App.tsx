import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { Footer } from "./components/footer/footer";

export default function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Navbar />
      <Hero />
      <Footer />
    </MantineProvider>
  );
}
