import React from "react";

import Task from "./Task";

export const actionsData = {
  onPinTask: { action: "onPinTask" },
  onArchiveTask: { action: "onArchiveTask" },
};

export const taskData = {
  id: "1",
  title: "Test Task",
  state: "TASK_INBOX",
  updatedAt: new Date(2018, 0, 1, 9, 0),
};
export default {
  component: Task,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  title: "Task",
  argTypes: {
    ...actionsData
  },
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: taskData,
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...taskData,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...taskData,
    state: "TASK_ARCHIVED",
  },
};
