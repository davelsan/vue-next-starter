export type LinkSection = {
  id: string;
  title: string;
  links: LinkObject[];
}

export type LinkObject = {
  href: string;
  label: string;
}