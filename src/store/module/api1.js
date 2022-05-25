// import { generateMutations } from '@techshed/tool-kit/utils/store';

const initialState = () => ({
person: [
{
id: 10,
firstName: "John",
lastName: "Doe"
},
{
id: 5,
firstName: "Jack",
lastName: "Doe"
},
{
id: 7,
firstName: "James",
lastName: "Doe"
}
]
});

export default function () {
return {
namespaced: true,
state: initialState(),

getters: {},
actions: {},
api1 (state) {
return state.api1;
},
mutations: {

clear (state, values = {}) {
Object.assign(state, initialState(), values);
},
},
};
}
