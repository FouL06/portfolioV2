import { Container, ThemeIcon, Timeline, Title, Text } from "@mantine/core";
import classes from "./experience.module.css";

const data = [
  {
    title: "Software Engineer",
    company: "OpenText",
    description:
      "Developed and maintained in-house test results dashboard using Jenkins API. Enhanced Integration testing for IAM products using Playwright. Collaborated with product teams to automate deployment into SaaS environments like AWS using Terraform and Kubernetes",
    time: "2022 - Present",
  },
  {
    title: "Full Stack Engineer",
    company: "iLumens",
    description:
      "Extended the ASIP API to transfer new Smart Buildings datasets using Django and PostgreSQL. Designed and implemented a feature set for organizing and managing smart rooms within the 'Smart Buildings' collection. Resolved over 20 bugs in the ASIP dashboard interface and enhanced data validation for improved user experience.",
    time: "Oct 2022 - Mar 2023",
  },
  {
    title: "Systems Administrator",
    company: "Nightingale College",
    description:
      "Managed system infrastructure insuring consistent uptime. Automated account creation and role level access for CMS, and Microsoft Systems. Gave company presentations to new hires, and gave presentations on system security and data management.",
    time: "Jan 2021 - Feb 2022",
  },
];

export function Experience() {
  const items = data.map((item) => (
    <Timeline.Item
      key={item.title}
      title={item.title}
      bullet={<ThemeIcon size={20} radius="xl" color="#1098AD" />}
    >
      <Text size="sm">{item.company}</Text>
      <Text c="dimmed" size="md">
        {item.description}
      </Text>
      <Text size="xs" mt={4}>
        {item.time}
      </Text>
    </Timeline.Item>
  ));
  return (
    <Container size="md" id="Experience" className={classes.outer}>
      <Title className={classes.subtitle}>Experience</Title>
      <Timeline active={2} bulletSize={22} lineWidth={4} color="#1098AD">
        {items}
      </Timeline>
    </Container>
  );
}
