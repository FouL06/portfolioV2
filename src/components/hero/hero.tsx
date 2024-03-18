import {
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from "@mantine/core";
import image from "../../images/me.jpg";
import classes from "./hero.module.css";

export function Hero() {
  return (
    <Container size="md">
      <div id="About" className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>Ashton Foulger</Title>
          <Title className={classes.subtitle}>Software Engineer</Title>
          <Text c="dimmed" mt="lg">
            Enhancing DevOps Transformation & CI/CD Processes
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={<ThemeIcon size={20} radius="xl" color="#1098AD" />}
          >
            <List.Item>
              <b>Passion For Design</b> - From crafting my first website in
              middle school to developing full-stack web applications, coding
              and UI/UX have been my lifelong passions.
            </List.Item>
            <List.Item>
              <b>Diverse Project Experience</b> – My journey includes diverse
              projects such as game development, freelance work, QA testing, and
              automating deployment processes for teams. Each endeavor has
              enriched my skill set as a developer.
            </List.Item>
            <List.Item>
              <b>Commitment To Learning</b> – I'm dedicated to leveraging
              technology for positive change, constantly exploring new trends
              and technologies to fuel my growth as a lifelong learner.
            </List.Item>
          </List>

          <Group mt={30}>
            <Button
              radius="md"
              size="md"
              color="#1098AD"
              className={classes.control}
            >
              <a
                href="https://github.com/FouL06"
                target="_blank"
                style={{
                  color: "var(--mantine-color-white",
                  textDecoration: "none",
                }}
              >
                Github
              </a>
            </Button>
          </Group>
        </div>
        <img className={classes.image} src={image} height={375} width={375} />
      </div>
    </Container>
  );
}
