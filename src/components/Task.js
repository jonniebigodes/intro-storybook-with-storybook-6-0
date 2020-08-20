import React from "react";
import PropTypes from "prop-types";
// simple component initial setup

/* export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) {
  return (
    <div className="list-item">
      <input type="text" value={title} readOnly={true} />
    </div>
  );
} */

// simple component updated changes
// export default function Task({
//   task: { id, title, state },
//   onArchiveTask,
//   onPinTask,
// }) {
//   return (
//     <div className={`list-item ${state}`}>
//       <label className="checkbox">
//         <input
//           type="checkbox"
//           defaultChecked={state === "TASK_ARCHIVED"}
//           disabled={true}
//           name="checked"
//         />
//         <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
//       </label>
//       <div className="title">
//         <input
//           type="text"
//           value={title}
//           readOnly={true}
//           placeholder="Input title"
//         />
//       </div>

//       <div className="actions" onClick={(event) => event.stopPropagation()}>
//         {state !== "TASK_ARCHIVED" && (
//           // eslint-disable-next-line jsx-a11y/anchor-is-valid
//           <a onClick={() => onPinTask(id)}>
//             <span className={`icon-star`} />
//           </a>
//         )}
//       </div>
//     </div>
//   );
// }
// Task.propTypes = {
//   /** Composition of the task */
//   task: PropTypes.shape({
//     /** Id of the task */
//     id: PropTypes.string.isRequired,
//     /** Title of the task */
//     title: PropTypes.string.isRequired,
//     /** Current state of the task */
//     state: PropTypes.string.isRequired,
//     /** Background color for each state */
//   }),
//   /** Event to change the task to archived */
//   onArchiveTask: PropTypes.func,
//   /** Event to change the task to pinned */
//   onPinTask: PropTypes.func,
// };


// using addons update
export default function Task({
  task: { id, title, state },
  backgroundColor,
  onArchiveTask,
  onPinTask,
}) {
  return (
    <div className={`list-item ${state}`} >
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
          style={backgroundColor && { backgroundColor }}
        />
      </div>

      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {state !== "TASK_ARCHIVED" && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
}
Task.propTypes = {
  /** Composition of the task */
  task: PropTypes.shape({
    /** Id of the task */
    id: PropTypes.string.isRequired,
    /** Title of the task */
    title: PropTypes.string.isRequired,
    /** Current state of the task */
    state: PropTypes.string.isRequired,
    /** Background color for each state */
  }),
  /** Background color for the task */
  backgroundColor:PropTypes.string,
  /** Event to change the task to archived */
  onArchiveTask: PropTypes.func,
  /** Event to change the task to pinned */
  onPinTask: PropTypes.func,
};