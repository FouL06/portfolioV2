import "./App.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { MantineProvider } from "@mantine/core";
import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { Footer } from "./components/footer/footer";
import { ContactForm } from "./components/contact/contact";
import { Projects } from "./components/projects/projects";

export default function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Navbar />
      <Hero />
      <Projects />
      <ContactForm />
      <Footer />
    </MantineProvider>
  );
}
