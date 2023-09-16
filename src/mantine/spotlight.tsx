import type { SpotlightAction } from "@mantine/spotlight";
import { IconDashboard, IconFileText, IconHome } from "@tabler/icons-react";

export const spotlightActions: SpotlightAction[] = [
  {
    title: "Home",
    description: "Get to home page",

    onTrigger: () => console.log("Home"),
    icon: <IconHome size="1.2rem" />,
  },
  {
    title: "Dashboard",
    description: "Get full information about current system status",
    onTrigger: () => console.log("Dashboard"),
    icon: <IconDashboard size="1.2rem" />,
  },
  {
    title: "Documentation",
    description: "Visit documentation to lean more about all features",
    onTrigger: () => console.log("Documentation"),
    icon: <IconFileText size="1.2rem" />,
  },
];
