import { Container, Group, Anchor } from "@mantine/core";
import classes from "./footer.module.css";
import logo from "../../images/Logo.svg";

const Links = [
  { link: "#Home", label: "Home" },
  { link: "#About", label: "About" },
  { link: "#Projects", label: "Projects" },
  { link: "#Experience", label: "Experience" },
  // { link: "#Contact", label: "Contact" },
];

export function Footer() {
  const handleSmoothScroll = (link: string) => {
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const FooterItems = Links.map((link) => (
    <Anchor<"a">
      c="dimmed"
      key={link.label}
      href={link.link}
      onClick={(e) => {
        e.preventDefault();
        handleSmoothScroll(link.link);
      }}
      size="md"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <img src={logo} height={30} width={30} />
        <Group className={classes.links}>{FooterItems}</Group>
      </Container>
    </div>
  );
}
