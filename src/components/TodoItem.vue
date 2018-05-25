<template>
    <div class="todo-item">
       <Checkbox v-model="todo.completed" />
        <div class="todo-item__text" :class="{completed: todo.completed}">
            {{ todo.text }}
        </div>
        <button class="todo-item__delete" @click="deleteTodo">X</button>
    </div>
</template>
<script>
import Checkbox from './Checkbox'
    export default {
        name: "TodoItem",
        components: {
            Checkbox
        },
        props: {
            todo: {
                type: Object
            }
        },
        methods: {
            deleteTodo () {
                this.$emit('delete', this.todo)
            }
        }
    }
</script>
<style scoped lang="scss">
    .todo-item {
        background: #7bed9f;
        font-weight: 700;
        border-radius: 3px;
        width: 100%;
        padding: 10px 20px;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        &:hover &__delete {
            opacity: 1;
            pointer-events: initial;
        }
        &__text {
            font-size: 22px;
            color: #fff;
            &.completed {
                text-decoration: line-through;
            }
        }
        &__delete {
            margin-left: auto;
            opacity: 0;
            pointer-events: none;
            border: 0;
            background: transparent;
            font-size: 20px;
            color: #fff;
            transition: all .3s;
            outline: none;
            cursor: pointer;
        }
    }
</style>
