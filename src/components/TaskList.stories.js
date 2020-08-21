import React from "react";

//updates for the data section (initial redux) 
//import TaskList from "./TaskList";

import { PureTaskList } from './TaskList';
import * as TaskStories from './Task.stories'


/* export const defaultTasksData = [
  { ...taskData, id: "1", title: "Task 1" },
  { ...taskData, id: "1", title: "Task 1" },
  { ...taskData, id: "2", title: "Task 2" },
  { ...taskData, id: "3", title: "Task 3" },
  { ...taskData, id: "4", title: "Task 4" },
  { ...taskData, id: "5", title: "Task 5" },
  { ...taskData, id: "6", title: "Task 6" }, 
  { ...TaskStories.default.args, id: "1", title: "Task 1" },
  { ...TaskStories.default.args, id: "2", title: "Task 2" },
  { ...TaskStories.default.args, id: "3", title: "Task 3" },
  { ...TaskStories.default.args, id: "4", title: "Task 4" },
  { ...TaskStories.default.args, id: "5", title: "Task 5" },
  { ...TaskStories.default.args, id: "6", title: "Task 6" },

];
/* export const withPinnedTasksData = [
  ...defaultTasksData.slice(0, 5),
  { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
];
 */

export default {
  //updates for the data section (initial redux) 
  //component: TaskList,
  component:PureTaskList,
  title: "PureTaskList",
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
  // Our exports that end in "Data" are not stories.
  // excludeStories: /.*Data$/,
  /* argTypes: {
    ...actionsData,
  }, */
};
//updates for the data section (initial redux) 
// const Template = (args) => <TaskList {...args} />;
const Template = (args) => <PureTaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Shaping the stories through args composition. 
  // The data was inherited the Default story in task.stories.js.
  tasks: [
    { ...TaskStories.Default.args.task, id: "1", title: "Task 1" },
    { ...TaskStories.Default.args.task, id: "2", title: "Task 2" },
    { ...TaskStories.Default.args.task, id: "3", title: "Task 3" },
    { ...TaskStories.Default.args.task, id: "4", title: "Task 4" },
    { ...TaskStories.Default.args.task, id: "5", title: "Task 5" },
    { ...TaskStories.Default.args.task, id: "6", title: "Task 6" },
  ]
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  // Shaping the stories through args composition. 
  // Inherited data coming from the Default story.
  tasks:[
    ...Default.args.tasks.slice(0,5),
    { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
  ]
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition. 
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};
