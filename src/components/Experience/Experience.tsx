import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import "./Experience.scss";

const experiences = [
	{
		year: "Dec 2023 – Present",
		company: "Nous Infosolutions LLP",
		position: "Senior Software Engineer",
		logo: "/assets/images/nous.jpg",
		skills: [
			"HTML5",
			"CSS3",
			"SCSS",
			"JavaScript",
			"TypeScript",
			"ReactJS",
			"Redux",
			"React Router Dom",
			"RESTful API",
			"Axios",
			"Swagger",
			"MUI",
			"Jest",
			"React Testing Library",
			"Mock Service Worker",
			"DataGrid",
			"Lodash",
			"Day.js",
			"React DnD",
			"Chart.js",
			"Git",
			"GitHub",
			"Jira",
			"Agile Methodology",
		],
		side: "right",
	},
	{
		year: "Aug 2023 – Nov 2023",
		company: "Family Care Leave",
		position: "Caring for son who needed medication",
		logo: "/assets/images/ansh.webp",
		skills: ["Parenting", "Full Time", "Caregiving", "Medical Support"],
		side: "left",
	},
	{
		year: "Aug 2022 – Jul 2023",
		company: "Falabella India",
		position: "Senior Full Stack Software Engineer",
		logo: "/assets/images/falabella.png",
		skills: [
			"HTML5",
			"CSS3",
			"JavaScript",
			"TypeScript",
			"ReactJS",
			"NextJS",
			"SCSS",
			"RESTful API",
			"Axios",
			"Fastify",
			"Postman",
			"Jest",
			"Enzyme",
			"Lodash",
			"Moment.js",
			"Context API",
			"Commitlint",
			"Stylelint",
			"Husky",
			"Lint-staged",
			"Git",
			"GitLab",
			"Jira",
			"Agile Methodology",
		],
		side: "right",
	},
	{
		year: "Apr 2022 – Jul 2022",
		company: "Paternity Leave",
		position: "Proud Father of a beautiful daughter",
		logo: "/assets/images/krithika.jpg",
		skills: ["Parenting", "Full Time", "Newborn Care", "Sleepless Nights", "Diaper Changing"],
		side: "left",
	},
	{
		year: "Mar 2021 - Mar 2022",
		company: "NIIT Limited",
		position: "Software Engineer",
		logo: "/assets/images/niit.jpg",
		skills: [
			"HTML5",
			"CSS3",
			"JavaScript",
			"TypeScript",
			"ReactJS",
			"React Router Dom",
			"RESTful API",
			"Axios",
			"Postman",
			"MUI",
			"Bootstrap",
			"Tailwind CSS",
			"SCSS",
			"Lodash",
			"Moment.js",
			"Chart.js",
			"Jest",
			"React Testing Library",
			"Keycloak",
			"Git",
			"GitLab",
			"Jira",
			"Agile Methodology",
		],
		side: "right",
	},
	{
		year: "Apr 2018 - Mar 2021",
		company: "Ritzy",
		position: "Senior Software Engineer",
		logo: "/assets/images/ritzy.jpg",
		skills: [
			"HTML5",
			"CSS3",
			"JavaScript",
			"TypeScript",
			"ReactJS",
			"SCSS",
			"Ionic",
			"Redux",
			"React Router Dom",
			"RESTful API",
			"Axios",
			"Tailwind CSS",
			"Material UI",
			"Jest",
			"Lodash",
			"Moment.js",
			"Git",
			"GitHub",
			"Jira",
			"Agile Methodology",
		],
		side: "left",
	},
];

const Experience = () => {
	return (
		<Stack
			direction="column"
			justifyContent="center"
			alignItems="center"
			className="experience__container"
		>
			<Typography variant="h5" component="h2" gutterBottom className="experience__heading">
				EXPERIENCE
			</Typography>

			<Box className="experience__timeline">
				{experiences.map((exp, _index) => (
					<Box key={exp.year} className="experience__year--wrapper">
						<Box className="experience__year--circle">
							<img src={exp.logo} alt={`${exp.company} logo`} />
						</Box>

						<Box className={`experience__item experience__item--${exp.side}`}>
							<Stack
								className={`experience__content experience__content--${exp.side}`}
								justifyContent="flex-start"
								alignItems="flex-start"
								spacing={1}
							>
								<Typography
									variant="caption"
									component="h5"
									sx={{
										background: "#AE944F",
										color: "#ffffff",
										padding: "4px 8px",
										borderRadius: "20px",
									}}
								>
									{exp.position}
								</Typography>

								<Typography
									variant="p"
									component="h3"
									sx={{
										color: "#000000",
										fontWeight: 500,
									}}
								>
									{exp.company}
								</Typography>

								<Stack direction="row" flexWrap="wrap">
									{exp.skills.map(skill => (
										<Typography key={skill}
											variant="caption"
											component="h5"
											sx={{
												background: "#f9f5e9",
												color: "#000000",
												fontSize: "11px",
												padding: "4px 8px",
												margin: "2px",
												borderRadius: "20px",
											}}
										>
											{skill}
										</Typography>
									))}
								</Stack>
							</Stack>
						</Box>

						<Typography
							variant="p"
							component="h5"
							className={`experience__date experience__date--${exp.side}`}
							sx={{
								background: "#ffffff",
								color: "#000000",
								fontSize: "11px",
								padding: "4px 8px",
								borderRadius: "20px",
							}}
						>
							{exp.year}
						</Typography>
					</Box>
				))}
			</Box>
		</Stack>
	);
};

export default Experience;
