# react-tasks-calendar [![ci](https://github.com/danielmbomfim/react-tasks-calendar/actions/workflows/workflow.yml/badge.svg)](https://github.com/Daniel775/projects-manager-api/actions/workflows/ci.yml) [![npm version](https://badge.fury.io/js/react-tasks-calendar.svg)](https://badge.fury.io/js/react-tasks-calendar) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Calendar and tasks components for React

# Getting started 🚀

---

If you are using yarn:

```shell
yarn add react-tasks-calendar styled-components
```

Or if you are using npm:

```shell
npm i react-tasks-calendar styled-components
```
# Usage

## Calendar component:

```js
import Calendar from 'react-tasks-calendar';

function CalendarComponent() {
  function handleSelection(date) {
    alert(date);
  }

  return (
    <Calendar.Container onSelectionChanged={handleSelection}>
      <Calendar.Header text="Current period" />
      <Calendar.ColumnsContainer>
        <Calendar.Column weekDay="1" />
        <Calendar.Column weekDay="2" />
        <Calendar.Column weekDay="3" />
        <Calendar.Column weekDay="4" />
        <Calendar.Column weekDay="5" />
      </Calendar.ColumnsContainer>
      <Calendar.ItemsContainer
        startDate={new Date('2023-09-23')}
        endDate={new Date('2023-10-27')}
        fillEmptySlots={true}
      />
    </Calendar.Container>
  );
}
```

The code above will result in someting like:

![image](https://github.com/danielmbomfim/react-tasks-calendar/assets/35501831/4407dd7e-4cdc-43b8-846d-ede66a30ee28)

## Tasks list

```js
import Task, { TasksContainer } from 'react-tasks-calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleInfo,
  faSquareArrowUpRight,
  faPenSquare
} from '@fortawesome/free-solid-svg-icons';

function TasksList() {
  return (
    <TasksContainer>
      <Task.Container
        icon={() => (
          <FontAwesomeIcon
            icon={faCircleInfo}
            color="#ffffff"
            style={{ fontSize: '2.5rem' }}
          />
        )}
      >
        <Task.Content>
          <Task.Title>Task header</Task.Title>
          <Task.Message>Task content</Task.Message>
        </Task.Content>
        <Task.Actions>
          <Task.Action
            icon={() => (
              <FontAwesomeIcon
                icon={faPenSquare}
                color="#ffffff"
                style={{ fontSize: '2rem' }}
              />
            )}
            title="edit"
            onClick={() => alert('edit task')}
          />
          <Task.Action
            icon={() => (
              <FontAwesomeIcon
                icon={faSquareArrowUpRight}
                color="#ffffff"
                style={{ fontSize: '2rem' }}
              />
            )}
            title="Open"
            onClick={() => alert('open task')}
          />
        </Task.Actions>
      </Task.Container>
      <Task.Container>
        <Task.Content>
          <Task.Title>Task header</Task.Title>
          <Task.Message>Task content</Task.Message>
        </Task.Content>
        <Task.Actions>
          <Task.Action
            icon={() => (
              <FontAwesomeIcon
                icon={faSquareArrowUpRight}
                color="#ffffff"
                style={{ fontSize: '2rem' }}
              />
            )}
            title="Open"
            onClick={() => alert('open task')}
          />
        </Task.Actions>
      </Task.Container>
    </TasksContainer>
  );
}
```

The code above will result in someting like:

![image](https://github.com/danielmbomfim/react-tasks-calendar/assets/35501831/17345c4f-90c0-4db4-825a-9b112519df78)
