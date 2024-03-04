import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  rem,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconAt } from "@tabler/icons-react";
import classes from "./contact.module.css";

export function ContactForm() {
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <div id="Contact" className={classes.outer}>
      <div id={classes.Contact}>
        <form onSubmit={form.onSubmit(() => {})}>
          <Title
            order={2}
            size="h1"
            style={{
              fontFamily: "Greycliff CF, var(--mantine-font-family)",
              color: "var(--mantine-color-gray-0)",
            }}
            fw={900}
            ta="center"
          >
            Get in touch
          </Title>

          <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
            <TextInput
              label="Name"
              placeholder="Your name"
              name="name"
              variant="filled"
              {...form.getInputProps("name")}
            />
            <TextInput
              label="Email"
              leftSection={icon}
              placeholder="Your email"
              name="email"
              variant="filled"
              {...form.getInputProps("email")}
            />
          </SimpleGrid>

          <TextInput
            label="Subject"
            placeholder="Subject"
            mt="md"
            name="subject"
            variant="filled"
            {...form.getInputProps("subject")}
          />
          <Textarea
            mt="md"
            label="Message"
            placeholder="Your message"
            maxRows={10}
            minRows={5}
            autosize
            name="message"
            variant="filled"
            {...form.getInputProps("message")}
          />

          <Group justify="center" mt="xl">
            <Button type="submit" size="md" radius="md" color="#1098AD">
              Contact Me
            </Button>
          </Group>
        </form>
      </div>
    </div>
  );
}
