// Logos are bundled in /public/icons (devicon + simple-icons), so they work offline and on any host.
const f = (n) => `${import.meta.env.BASE_URL}icons/${n}.svg`;
export const icons = {
  "React.js": f("react"), AngularJS: f("angularjs"), JavaScript: f("javascript"), TypeScript: f("typescript"),
  "HTML5/CSS3": f("html5"), "Material UI": f("materialui"), Bootstrap: f("bootstrap"), jQuery: f("jquery"),
  "Node.js": f("nodejs"), "Express.js": f("express"), PHP: f("php"), Laravel: f("laravel"), JWT: f("jsonwebtokens"),
  "OpenAI API": f("openai"), "Claude API": f("anthropic"), Stripe: f("stripe"), PayPal: f("paypal"),
  MySQL: f("mysql"), PostgreSQL: f("postgresql"), "AWS S3": f("aws"), "Git/GitHub": f("github"), "CI/CD pipeline": f("cicd"), Postman: f("postman"),
};
