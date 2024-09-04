import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import "./Skills.scss";

const skills = [
	{ name: "HTML5", icon: "html5.svg" },
	{ name: "CSS3", icon: "css3.svg" },
	{ name: "SCSS", icon: "scss.svg" },
	{ name: "JavaScript", icon: "javascript.svg" },
	{ name: "TypeScript", icon: "typescript.svg" },
	{ name: "React", icon: "reactjs.svg" },
	{ name: "NextJS", icon: "nextjs.svg" },
	{ name: "Ionic", icon: "ionic.svg" },
	{ name: "Storybook", icon: "storybook.svg" },
	{ name: "Redux", icon: "redux.svg" },
	{ name: "React Router DOM", icon: "reactrouterdom.svg" },
	{ name: "Redux Toolkit", icon: "redux.svg" },
	{ name: "Bootstrap", icon: "bootstrap.svg" },
	{ name: "Tailwind CSS", icon: "tailwindcss.svg" },
	{ name: "Material UI", icon: "materialui.svg" },
	{ name: "Axios", icon: "axios.svg" },
	{ name: "Jest", icon: "jest.svg" },
	{ name: "React Testing Library", icon: "rtl.png" },
	{ name: "Mock Service Worker", icon: "msw.png" },
	{ name: "Git", icon: "git.svg" },
	{ name: "GitHub", icon: "github.svg" },
	{ name: "GitLab", icon: "gitlab.svg" },
	{ name: "Node.js", icon: "nodejs.svg" },
	{ name: "Express", icon: "express.svg" },
	{ name: "MongoDB", icon: "mongodb.svg" },
	{ name: "MongooseODM", icon: "mongoose.png" },
	{ name: "Eslint", icon: "eslint.svg" },
	{ name: "Prettier", icon: "prettier.svg" },
	{ name: "Commitlint", icon: "commitlint.svg" },
	{ name: "BiomeJS", icon: "biomejs.svg" },
	{ name: "Chart.js", icon: "chartjs.png" },
	{ name: "Day.js", icon: "dayjs.svg" },
	{ name: "Lodash", icon: "lodash.svg" },
	{ name: "jQuery", icon: "jquery.svg" },
	{ name: "Swagger", icon: "swagger.svg" },
	{ name: "Moment.js", icon: "momentjs.svg" },
	{ name: "Fastify", icon: "fastify.svg" },
	{ name: "Postman", icon: "postman.svg" },
	{ name: "Jira", icon: "jira.svg" },
	{ name: "Stylelint", icon: "stylelint.svg" },
	{ name: "Docker", icon: "docker.svg" },
];

const Skills = () => {
	return (
		<Stack justifyContent="center" className="skills__container" sx={{ minHeight: "100vh" }}>
			<Typography variant="h5" component="h2" className="skills__heading" sx={{ m: 4 }}>
				SKILLS
			</Typography>

			<Box className="skills__card">
				{skills.map(skill => (
					<Box key={skill.name} className="skill__item">
						<img
							src={`/assets/icons/${skill.icon}`}
							alt={skill.name}
							className="skill__icon"
							loading="lazy"
						/>
						<Typography
							variant="caption"
							className="skill__name"
							sx={{ paddingTop: "5x" }}
						>
							{skill.name}
						</Typography>
					</Box>
				))}
			</Box>
		</Stack>
	);
};

export default Skills;
