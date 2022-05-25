import fs from "fs";
import { parseString } from "xml2js";
var newXml = "<persons><person><id>3 < /id>< firstName > Jen < /firstName>< lastName > Doe < /lastName>< /person>< person ><id>6 < /id>< firstName > Stephanie < /firstName>< lastName > Joe < /lastName>< /person>< person ><id>1 < /id>< firstName > Victoria < /firstName>< lastName > Doe < /lastName>< /person>< /persons>";

const data = [];
parseString(newXml, function (results) {

	 data = JSON.stringify(results)

	});

const initialState = () => (data);

  export default function () {
return {
namespaced: true,
state: initialState(),

getters: {
},

actions: {
},
api2 (state) {
return state.api2;
},
mutations: {

clear (state, values = {}) {
Object.assign(state, initialState(), values);
},
},
};
}
