import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Container, Group, Burger, Transition, Paper } from "@mantine/core";
import classes from "./navbar.module.css";
import logo from "../../images/Logo.svg";

const Links = [
  { link: "#Home", label: "Home" },
  { link: "#About", label: "About" },
  { link: "#Projects", label: "Projects" },
  { link: "#Experience", label: "Experience" },
  { link: "#Contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState(Links[0].link);
  const [opened, { toggle }] = useDisclosure(false);

  const NavItems = Links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <img src={logo} height={30} width={30} />
        <Group gap={5} visibleFrom="xs">
          {NavItems}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>

      <Transition
        mounted={opened}
        transition="slide-left"
        duration={300}
        timingFunction="ease"
      >
        {(styles) => (
          <Paper className={classes.linksContainer} style={styles}>
            <Group gap={5}>{NavItems}</Group>
          </Paper>
        )}
      </Transition>
    </header>
  );
}
