<template>
  <div class="todo-list">
    <div class="todo-list__title">Todo list</div>
      <input type="text" v-model="todoText" class="todo-list__input" @keydown.enter="addTodo">
      <TodoItem
        v-for="todo in filteredTodos"
        :key="todo.id"
        :todo="todo"
        @delete="deleteTodo"
      />
      <div class="todo-list__footer" v-if="todoList.length">
        <div class="todo-list__left-todos">
          {{ itemsLeft }} {{  itemsLeft > 1 ? 'items': 'item'}} left</div>
        <div class="todo-list__filter">
          <button @click="filterTag = 'all'" :class="{active:filterTag === 'all'}">All</button>
          <button @click="filterTag = 'active'" :class="{active:filterTag === 'active'}">Active</button>
          <button @click="filterTag = 'completed'" :class="{active:filterTag === 'completed'}">Completed</button>
        </div>
        <a href="#" class="todo-list__clear-completed" @click="clearCompleted" v-if="completedItemList.length" >Clear completed</a>
      </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem'
export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  data () {
    return {
      todoText: '',
      todoList: [],
      filterTag: "all"
    }
  },
  methods: {
    addTodo () {
      if (this.todoText.length) {
      let todoItem = {
        id: Math.floor(Math.random() * 1000),
        text: this.todoText,
        completed: false
      }
      this.todoList.push(todoItem)
      this.todoText = ''
      }
    },
    deleteTodo (todo) {
      let itemToDelete = this.todoList.find(item => item.id === todo.id)
      this.todoList.splice(this.todoList.indexOf(itemToDelete), 1)
    },
    clearCompleted () {
      this.todoList = this.todoList.filter(item => !item.completed)
    }
  },
  computed: {
    filteredTodos () {
      switch(this.filterTag) {
        case 'all':
        return this.todoList
        case 'active':
        return this.todoList.filter(todo => !todo.completed)
        case 'completed':
        return this.todoList.filter(todo => todo.completed)
      }
    },
    itemsLeft () {
      return this.todoList.filter(todo => !todo.completed).length
    },
    completedItemList () {
      return this.todoList.filter(todo => todo.completed)
    }
  }
}
</script>

<style scoped lang="scss">
  .todo-list {
    width: 500px;
    margin: 0 auto;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
    padding: 20px;
  
    &__input {
      width: 100%;
      font-size: 24px;
      padding: 10px 20px;
      border-radius: 5px;
      border: 1px solid #2ed573;
      outline: none;
      margin-bottom: 10px;
    }
    &__title {
      font-size: 24px;
      text-align: center;
      margin-bottom: 20px;
    }
    &__footer {
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
      align-items: center;
      button {
        border: 1px solid #eccc68;
        padding: 5px 10px;
        border-radius: 3px;
        transition: all .3s;
        outline: none;
        cursor: pointer;
        &:hover,
        &.active {
          background: #eccc68;
          color: #fff;
        }
      }
      button:not(:last-of-type) {
        margin-right: 10px;
      }
    }
    &__clear-completed {
      border: none;
      color:#2c3e50;
      font-size: 14px;
    }
  }
</style>
