import React from "react";

import Task from "./Task";

/* export const actionsData = {
  onPinTask: { action: "onPinTask" },
  onArchiveTask: { action: "onArchiveTask" },
}; */

/* export const taskData = {
  id: "1",
  title: "Test Task",
  state: "TASK_INBOX",
  updatedAt: new Date(2018, 0, 1, 9, 0),
}; */
export default {
  component: Task,
  // Our exports that end in "Data" are not stories.
  // excludeStories: /.*Data$/,
  title: "Task",
  parameters: {
    assets: [
      /*  'path/to/your/asset.png',
      'path/to/another/asset.png',
      'path/to/yet/another/asset.png', */
      "./image_1.jpg",
      "./image_2.jpg",
      "./image_3.jpg",
    ],
  },
  argTypes: {
    /* ...actionsData, */
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
  //backgroundColor: '#e5f9f7',
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
  //backgroundColor: '#c0eef0',
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
  //backgroundColor: '#d7f5f5',
};
