import { createProject, createTask, projects_arr} from './logic'
import { consoleProject } from './display';

createProject('Work');
createProject('Personal');
createTask(0, 'Coding', 'Add new feature', 'July 13, 2023', 'Normal', false);
createTask(0, 'Report', 'Provide the changelog', 'July 15, 2023', 'High', false);
createTask(1, 'Car', 'Change oil', 'July 24, 2023', 'None', false);
consoleProject(projects_arr);



