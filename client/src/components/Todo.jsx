import '../styles/Todo.css';
import Completed from './Completed';
import DeleteTodo from './DeleteTodo';

const Todo = () => {
  return (
    <>
      <div className='todo'>
        <div className='text-content'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugit ipsam porro commodi aperiam nobis fuga dolore laboriosam cupiditate adipisci
            quasi quaerat explicabo maiores dolores, totam veritatis amet autem. Aliquam?
          </p>
        </div>
        <div className='buttons-area'>
          <Completed />
          <DeleteTodo />
        </div>
      </div>
    </>
  );
};
export default Todo;
