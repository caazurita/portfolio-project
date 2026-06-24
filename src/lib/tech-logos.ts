const iconMap: Record<string, { key: string; name: string }> = {
  TypeScript: {
    key: "typescript",
    name: "typescript-original.svg",
  },
  JavaScript: {
    key: "javascript",
    name: "javascript-original.svg",
  },
  "Node.js": {
    key: "nodejs",
    name: "nodejs-original.svg",
  },
  Express: {
    key: "express",
    name: "express-original.svg",
  },
  SendGrid: {
    key: "twilio",
    name: "twilio-original.svg",
  },
  Twilio: {
    key: "twilio",
    name: "twilio-original.svg",
  },
  React: {
    key: "react",
    name: "react-original.svg",
  },
  "React.js": {
    key: "react",
    name: "react-original.svg",
  },
  "Next.js": {
    key: "nextjs",
    name: "nextjs-original.svg",
  },
  "Vue.js": {
    key: "vuejs",
    name: "vuejs-original.svg",
  },
  CircleCI: {
    key: "circleci",
    name: "circleci-plain.svg",
  },
  PostgreSQL: {
    key: "postgresql",
    name: "postgresql-original.svg",
  },
  MongoDB: {
    key: "mongodb",
    name: "mongodb-original.svg",
  },
  AWS: {
    key: "amazonwebservices",
    name: "amazonwebservices-plain-wordmark.svg",
  },
  Lambda: {
    key: "amazonwebservices",
    name: "amazonwebservices-plain-wordmark.svg",
  },
  "AWS SAM": {
    key: "amazonwebservices",
    name: "amazonwebservices-plain-wordmark.svg",
  },
  BitBucket: {
    key: "bitbucket",
    name: "bitbucket-original.svg",
  },
  Git: {
    key: "git",
    name: "git-original.svg",
  },
  Python: {
    key: "python",
    name: "python-original.svg",
  },
  Figma: {
    key: "figma",
    name: "figma-original.svg",
  },
  Jira: {
    key: "jira",
    name: "jira-original.svg",
  },
  "Tailwind CSS": {
    key: "tailwindcss",
    name: "tailwindcss-original.svg",
  },
  Materialui: {
    key: "materialui",
    name: "materialui-original.svg",
  },
  HTML5: {
    key: "html5",
    name: "html5-original.svg",
  },
  MySQL: {
    key: "mysql",
    name: "mysql-original.svg",
  },
  GitHub: {
    key: "github",
    name: "github-original.svg",
  },
  Docker: {
    key: "docker",
    name: "docker-original.svg",
  },
  Swagger: {
    key: "swagger",
    name: "swagger-original.svg",
  },
  PHP: {
    key: "php",
    name: "php-original.svg",
  },
  Laravel: {
    key: "laravel",
    name: "laravel-original.svg",
  },
  "Laravel Blade": {
    key: "laravel",
    name: "laravel-original.svg",
  },
  Firebase: {
    key: "firebase",
    name: "firebase-original.svg",
  },
  Dart: {
    key: "dart",
    name: "dart-original.svg",
  },
  "Digital Ocean": {
    key: "digitalocean",
    name: "digitalocean-original.svg",
  },
  ClickUp: {
    key: "clickup",
    name: "clickup-original.svg",
  },
  "Google Map Platform": {
    key: "googlecloud",
    name: "googlecloud-original.svg",
  },
  Prisma: {
    key: "prisma",
    name: "prisma-original.svg",
  },
  "Clean Architecture": {
    key: "netbox",
    name: "netbox-original.svg",
  },
  "Hexagonal Architecture": {
    key: "netbox",
    name: "netbox-original.svg",
  },
  "Design Patterns": {
    key: "antdesign",
    name: "antdesign-original.svg",
  },
  Microservices: {
    key: "netbox",
    name: "netbox-original.svg",
  },
  Notion: {
    key: "notion",
    name: "notion-original.svg",
  },
  Slack: {
    key: "slack",
    name: "slack-original.svg",
  },
  GraphQL: {
    key: "apollographql",
    name: "apollographql-original.svg",
  },
  "API Gateway": {
    key: "amazonwebservices",
    name: "amazonwebservices-plain-wordmark.svg",
  },
  FastAPI: {
    key: "fastapi",
    name: "fastapi-original.svg",
  },
  Flask: {
    key: "flask",
    name: "flask-original.svg",
  },
  Pandas: {
    key: "pandas",
    name: "pandas-original.svg",
  },
  Passport: {
    key: "passport",
    name: "passport-original.svg",
  },
  Sequelize: {
    key: "sequelize",
    name: "sequelize-original.svg",
  },
  Mongoose: {
    key: "mongoose",
    name: "mongoose-original.svg",
  },
};

const baseUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export function getTechLogoUrl(tag: string): string | null {
  const key = iconMap[tag];
  if (!key) return null;
  return `${baseUrl}/${key.key}/${key.name}`;
}
