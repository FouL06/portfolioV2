import { useState } from "react";
import { useClickOutside } from "@mantine/hooks";
import { Container, Group, Burger, Transition, Paper } from "@mantine/core";
import classes from "./navbar.module.css";
import logo from "../../images/Logo.svg";

const Links = [
  { link: "#Home", label: "Home" },
  { link: "#About", label: "About" },
  { link: "#Projects", label: "Projects" },
  { link: "#Experience", label: "Experience" },
  // { link: "#Contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState(Links[0].link);
  const [opened, setOpened] = useState(false);
  const clickOutsideRef = useClickOutside(() => setOpened(false));

  const handleSmoothScroll = (link: string) => {
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActive(link);
      setOpened(false);
    }
  };

  const NavItems = Links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(e) => {
        e.preventDefault();
        handleSmoothScroll(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  const MenuItems = Links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        handleSmoothScroll(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container
        size="md"
        id="Home"
        className={classes.inner}
        ref={clickOutsideRef}
      >
        <img src={logo} height={30} width={30} />
        <Group gap={5} visibleFrom="xs">
          {NavItems}
        </Group>
        <Burger
          opened={opened}
          onClick={() => {
            setOpened(!opened);
          }}
          hiddenFrom="xs"
          size="sm"
        />
      </Container>

      <Transition
        mounted={opened}
        transition="slide-left"
        duration={200}
        timingFunction="ease"
      >
        {(styles) => (
          <Paper className={classes.linksContainer} style={styles}>
            <Group gap={5}>{MenuItems}</Group>
          </Paper>
        )}
      </Transition>
    </header>
  );
}
