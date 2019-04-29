import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      ToDo: [
        {chore:"Clean Car", priority:"Low", completed: false},
        {chore:"Paint Fence", priority:"Low", completed: false},
        {chore:"Do shoppping", priority:"High", completed: false}
      ],
      newChore : "",
      newPriority: ""
    },
    methods: {
      addChore: function(){
        this.ToDo.push({
          chore: this.newChore,
          priority: this.newPriority,
          completed: false});
          this.newChore = "";
          this.newPriority = "";
        },
        completeChore: function(index){
          this.ToDo[index].completed = true;
        }
      }
    });
  });
