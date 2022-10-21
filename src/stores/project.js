import { defineStore } from "pinia"
import { ref } from "vue"

export const useProjectStore = defineStore('project', () => {
    const projects = ref([
        {
            slug: 'project-1',
            title: 'project 1'
        },
        {
            slug: 'project-2',
            title: 'project 2'
        },
        {
            slug: 'project-3',
            title: 'project 3'
        }
    ]);

    return { projects };
})