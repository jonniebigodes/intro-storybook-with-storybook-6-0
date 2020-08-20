import React from "react";

//updates for the data section (initial redux) 
//import TaskList from "./TaskList";

import { PureTaskList } from './TaskList';
import { taskData, actionsData } from "./Task.stories";

export const defaultTasksData = [
  { ...taskData, id: "1", title: "Task 1" },
  { ...taskData, id: "2", title: "Task 2" },
  { ...taskData, id: "3", title: "Task 3" },
  { ...taskData, id: "4", title: "Task 4" },
  { ...taskData, id: "5", title: "Task 5" },
  { ...taskData, id: "6", title: "Task 6" },
];
export const withPinnedTasksData = [
  ...defaultTasksData.slice(0, 5),
  { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
];

export default {
  //updates for the data section (initial redux) 
  //component: TaskList,
  component:PureTaskList,
  title: "PureTaskList",
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  argTypes: {
    ...actionsData,
  },
};
//updates for the data section (initial redux) 
// const Template = (args) => <TaskList {...args} />;
const Template = (args) => <PureTaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasks: defaultTasksData,
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  tasks: withPinnedTasksData,
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  tasks: [],
  loading: false,
};
