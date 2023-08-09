import { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import './Companies.scss';
import { useContext } from 'react';
import { SkillsContext, ISkillsContext } from '../../../skills/SkillsContext';

import Roles from '../Roles/Roles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const ProjectsPage = () => {
	const [value, setValue] = useState(0);

	const { roles } = useContext(SkillsContext) as ISkillsContext;

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
	  setValue(newValue);
	};

	useEffect(() => {
		// Select the first TabPanel with at least one project
		for (let i=0; i<roles.length; i++) {
			if (roles[i].projects && roles[i].projects.length) {
				setValue(i);
				break;
			}
		}
	}, [roles]);

	return (
		<div id='companies'>
			<Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}>
				<Tabs
					orientation="vertical"
					variant="scrollable"
					value={value}
					onChange={handleChange}
					aria-label="Vertical tabs example"
					sx={{ borderRight: 1, borderColor: 'divider', minWidth: 200, minHeight: 1100 }}
				>
					{roles && roles.length > 0 ? roles.map((role: any, index: any) => (
						<Tab disabled={!role.projects || !role.projects.length} label={role.company + (role.projects && role.projects.length? ' (' + role.projects.length + ')' : '')} key={role.company.toString()} {...a11yProps(index)} />
					)) : '' }
				</Tabs>

				{roles && roles.length > 0 ? roles.map((role: any, index: any) => (
					role.projects && role.projects.length && 
					<TabPanel value={value} index={index} key={role.company.toString()}>
						<Roles role={role}/>
					</TabPanel>
				)) : <div>{'No roles available'}</div> }
			</Box>
		</div>
	)
}

export default ProjectsPage;
