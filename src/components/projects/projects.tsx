import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  rem,
  Container,
} from "@mantine/core";
import classes from "./projects.module.css";
import MyPetTag from "../../images/MyPetTag.png";
import LoLReplay from "../../images/LoLReplay.png";
import TankWars from "../../images/TankWars.png";
import MySpreadsheet from "../../images/MySpreadsheet.png";
import KLAbc from "../../images/KLA-bc.png";
import CubeImg from "../../images/Cube.png";
import KanjiCards from "../../images/KanjiCards.png";
import PasswordGen from "../../images/PasswordGen.png";
import SimonGame from "../../images/SimonGame.png";

interface CardProps {
  image: string;
  title: string;
  link: string;
  category: string;
}

function Card({ image, title, link, category }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="lg"
      style={{
        backgroundImage: `url(${image})`,
        boxShadow: "inset 0px 0px 50px 20px rgba(0,0,0,0.6)",
      }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="filled" color="#1098AD" radius="md">
        <a
          href={link}
          target="_blank"
          style={{
            color: "var(--mantine-color-white)",
            textDecoration: "none",
          }}
        >
          View Project
        </a>
      </Button>
    </Paper>
  );
}

const data = [
  {
    image: MyPetTag,
    title: "MyPetTag",
    link: "https://mypettag-5970e.web.app/login",
    category: "Web Application",
  },
  {
    image: LoLReplay,
    title: "LoLReplay",
    link: "https://github.com/FouL06/LoLReplay",
    category: "Web Application",
  },
  {
    image: TankWars,
    title: "Toy Tanks",
    link: "https://github.com/FouL06/Toy-Tanks",
    category: "Desktop Application",
  },
  {
    image: MySpreadsheet,
    title: "MySpreadsheet",
    link: "https://github.com/FouL06/MySpreadsheet",
    category: "Desktop Application",
  },
  {
    image: KanjiCards,
    title: "Kanji Cards",
    link: "https://github.com/FouL06/Kanji-Cards",
    category: "Desktop Application",
  },
  {
    image: SimonGame,
    title: "Simon Game",
    link: "https://github.com/FouL06/Simon-Game",
    category: "Desktop Application",
  },
  {
    image: KLAbc,
    title: "KLA Breakthrough Consulting",
    link: "https://klabreakthroughconsulting.com/",
    category: "Web Application",
  },
  {
    image: CubeImg,
    title: "3D Cube",
    link: "https://github.com/FouL06/JavaScript-3D-Cube",
    category: "Web Application",
  },
  {
    image: PasswordGen,
    title: "Password Generator",
    link: "https://github.com/FouL06/Password-Generator",
    category: "Desktop Application",
  },
];

export function Projects() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Container size="md" id="Projects" className={classes.outer}>
      <Carousel
        slideSize={{ base: "100%", sm: "50%" }}
        slideGap={{ base: rem(2), sm: "xl" }}
        align="start"
        withIndicators
        slidesToScroll={mobile ? 1 : 2}
      >
        {slides}
      </Carousel>
    </Container>
  );
}
