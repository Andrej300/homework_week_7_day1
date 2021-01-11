import Vue from 'vue';   

document.addEventListener ("DOMContentLoaded", () => {

    new Vue ({ 

        el: "#app",  
    

        data: { 
            todos: ['Washing Dishes','Food shopping','Finish homework','Make dinner'],
            newTask:""
        },
        methods: {
            saveNewItem: function (){
                this.todos.push (this.newTask);
                this.newTask = "";
            },
        },
    });

});