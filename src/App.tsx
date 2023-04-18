import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './projects/ProjectsPage'
import ProjectsPage from './projects/ProjectsPage';
import Hello from './hello/Hello';
import { Fruit } from './fruits/Fruit';
import { ProjectList, ProjectListItem } from './projects/ProjectList';
import { MOCK_PROJECTS } from './projects/MockProjects';
import Clock from './clock/Clock';

function App() {
  return (
    <div>
      <Clock></Clock>
      <ProjectsPage></ProjectsPage>
      <div>
        <Hello name="German" enthusiasmLevel={1}></Hello>
      </div>   
      <div>
        <ProjectList projects={MOCK_PROJECTS} ></ProjectList>
      </div>
    </div>
        

  );
}

const data : Array<Fruit> = [
  { id: 1, name: 'apple' },
  { id: 2, name: 'orange' },
  { id: 3, name: 'blueberry' },
  { id: 4, name: 'banana' },
  { id: 5, name: 'kiwi' },
];

const projectsData : Array<ProjectListItem> = [
  { id: 1, name: 'Google' },
  { id: 2, name: 'AWS' },
  { id: 3, name: 'MAC' },
  { id: 4, name: 'MIKE' },
];

export default App;