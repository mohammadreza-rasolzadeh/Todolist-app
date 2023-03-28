import { Todos, SearchAndCategoryContainer, ClearListButton } from "./";

const TodosContainer = () => {
  return (
    <section className="todos-container">
      <SearchAndCategoryContainer />
      <Todos />
      <ClearListButton />
    </section>
  );
};
export default TodosContainer;
