import '../styles/List.css';
import AddTodo from './AddTodo';
import Todo from './Todo';

const List = () => {
  return (
    <div className='list'>
      <div className='title-bar'>
        <div>
          <h3 className='title'>My To-Do's</h3>
        </div>
        <AddTodo />
      </div>
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </div>
  );
};

export default List;
