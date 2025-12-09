import { Todo } from '../types/Todo';
import cn from 'classnames';

type Props = {
  todos: Todo[];
  activeTodos: Todo[];
  statusFilter: 'all' | 'active' | 'completed';
  setStatusFilter: (string: 'all' | 'active' | 'completed') => void;
  clearCompleted: () => void;
};

export const TodoFooter = ({
  activeTodos,
  todos,
  statusFilter,
  setStatusFilter,
  clearCompleted,
}: Props) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {activeTodos.length} items left
      </span>

      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={cn('filter__link', {
            selected: statusFilter === 'all',
          })}
          data-cy="FilterLinkAll"
          onClick={() => setStatusFilter('all')}
        >
          All
        </a>

        <a
          href="#/active"
          className={cn('filter__link', {
            selected: statusFilter === 'active',
          })}
          data-cy="FilterLinkActive"
          onClick={() => setStatusFilter('active')}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={cn('filter__link', {
            selected: statusFilter === 'completed',
          })}
          data-cy="FilterLinkCompleted"
          onClick={() => setStatusFilter('completed')}
        >
          Completed
        </a>
      </nav>

      <button
        type="button"
        disabled={!todos.some(todo => todo.completed)}
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        onClick={clearCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
};
