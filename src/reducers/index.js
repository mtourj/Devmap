import uniqid from "uniqid";
import * as actions from "../actions";

// This is how the data should be structured:
// const initialState = {
//   token: "devmap",
//   currentMap: "",
//   maps: [
//     {
//       id: uniqid(),
//       name: "devmap1",
//       author: "devmaps",
//       modules: [
//         {
//           title: "View Module",
//           components: [
//             {
//               title: "Component1",
//               properties: [
//                 { name: "property1", type: "string" },
//                 { name: "property2", type: "int" },
//                 { name: "property3", type: "{}" }
//               ],
//               methods: [
//                 { name: "method1", returns: "int" },
//                 { name: "method2", returns: "string" },
//                 { name: "method3", returns: "[]" }
//               ]
//             },
//             {
//               title: "Component1",
//               properties: [
//                 { name: "property1", type: "string" },
//                 { name: "property2", type: "int" },
//                 { name: "property3", type: "{}" }
//               ],
//               methods: [
//                 { name: "method1", returns: "int" },
//                 { name: "method2", returns: "string" },
//                 { name: "method3", returns: "[]" }
//               ]
//             }
//           ]
//         },
//         {
//           title: "Data Module",
//           components: [
//             {
//               title: "Component1",
//               properties: [
//                 { name: "property1", type: "string" },
//                 { name: "property2", type: "int" },
//                 { name: "property3", type: "{}" }
//               ],
//               methods: [
//                 { name: "method1", returns: "int" },
//                 { name: "method2", returns: "string" },
//                 { name: "method3", returns: "[]" }
//               ]
//             },
//             {
//               title: "Component1",
//               properties: [
//                 { name: "property1", type: "string" },
//                 { name: "property2", type: "int" },
//                 { name: "property3", type: "{}" }
//               ],
//               methods: [
//                 { name: "method1", returns: "int" },
//                 { name: "method2", returns: "string" },
//                 { name: "method3", returns: "[]" }
//               ]
//             }
//           ]
//         },
//         {
//           title: "Control Module",
//           components: [
//             {
//               title: "Component1",
//               properties: [
//                 { name: "property1", type: "string" },
//                 { name: "property2", type: "int" },
//                 { name: "property3", type: "{}" }
//               ],
//               methods: [
//                 { name: "method1", returns: "int" },
//                 { name: "method2", returns: "string" },
//                 { name: "method3", returns: "[]" }
//               ]
//             },
//             {
//               title: "Component1",
//               properties: [
//                 { name: "property1", type: "string" },
//                 { name: "property2", type: "int" },
//                 { name: "property3", type: "{}" }
//               ],
//               methods: [
//                 { name: "method1", returns: "int" },
//                 { name: "method2", returns: "string" },
//                 { name: "method3", returns: "[]" }
//               ]
//             }
//           ]
//         }
//       ]
//     },
//     {
//       id: uniqid(),
//       name: "devmap1",
//       author: "devmaps",
//       modules: [
//         {
//           title: "View Module",
//           components: [
//             {
//               title: "Component1",
//               properties: [
//                 { name: "property1", type: "string" },
//                 { name: "property2", type: "int" },
//                 { name: "property3", type: "{}" }
//               ],
//               methods: [
//                 { name: "method1", returns: "int" },
//                 { name: "method2", returns: "string" },
//                 { name: "method3", returns: "[]" }
//               ]
//             },
//             {
//               title: "Component1",
//               properties: [
//                 { name: "property1", type: "string" },
//                 { name: "property2", type: "int" },
//                 { name: "property3", type: "{}" }
//               ],
//               methods: [
//                 { name: "method1", returns: "int" },
//                 { name: "method2", returns: "string" },
//                 { name: "method3", returns: "[]" }
//               ]
//             }
//           ]
//         },
//         {
//           title: "Data Module",
//           components: [
//             {
//               title: "Component1",
//               properties: [
//                 { name: "property1", type: "string" },
//                 { name: "property2", type: "int" },
//                 { name: "property3", type: "{}" }
//               ],
//               methods: [
//                 { name: "method1", returns: "int" },
//                 { name: "method2", returns: "string" },
//                 { name: "method3", returns: "[]" }
//               ]
//             },
//             {
//               title: "Component1",
//               properties: [
//                 { name: "property1", type: "string" },
//                 { name: "property2", type: "int" },
//                 { name: "property3", type: "{}" }
//               ],
//               methods: [
//                 { name: "method1", returns: "int" },
//                 { name: "method2", returns: "string" },
//                 { name: "method3", returns: "[]" }
//               ]
//             }
//           ]
//         },
//         {
//           title: "Control Module",
//           components: [
//             {
//               title: "Component1",
//               properties: [
//                 { name: "property1", type: "string" },
//                 { name: "property2", type: "int" },
//                 { name: "property3", type: "{}" }
//               ],
//               methods: [
//                 { name: "method1", returns: "int" },
//                 { name: "method2", returns: "string" },
//                 { name: "method3", returns: "[]" }
//               ]
//             },
//             {
//               title: "Component1",
//               properties: [
//                 { name: "property1", type: "string" },
//                 { name: "property2", type: "int" },
//                 { name: "property3", type: "{}" }
//               ],
//               methods: [
//                 { name: "method1", returns: "int" },
//                 { name: "method2", returns: "string" },
//                 { name: "method3", returns: "[]" }
//               ]
//             }
//           ]
//         }
//       ]
//     }
//   ]
// };

// Some dummy data here....

const initialState = {
  token: localStorage.getItem("token"),
  currentMap: "",
  maps: [
    {
      id: uniqid(),
      name: "devmap1",
      author: "devmaps",
      modules: [
        {
          id: uniqid(),
          title: "View Module",
          components: [
            {
              title: "Component1",
              properties: [
                { name: "property1", type: "string" },
                { name: "property2", type: "int" },
                { name: "property3", type: "{}" }
              ],
              methods: [
                { name: "method1", returns: "int" },
                { name: "method2", returns: "string" },
                { name: "method3", returns: "[]" }
              ]
            },
            {
              title: "Component2",
              properties: [
                { name: "property1", type: "string" },
                { name: "property2", type: "int" },
                { name: "property3", type: "{}" }
              ],
              methods: [
                { name: "method1", returns: "int" },
                { name: "method2", returns: "string" },
                { name: "method3", returns: "[]" }
              ]
            }
          ]
        },
        {
          id: uniqid(),
          title: "Data Module",
          components: [
            {
              title: "Component3",
              properties: [
                { name: "property1", type: "string" },
                { name: "property2", type: "int" },
                { name: "property3", type: "{}" }
              ],
              methods: [
                { name: "method1", returns: "int" },
                { name: "method2", returns: "string" },
                { name: "method3", returns: "[]" }
              ]
            },
            {
              title: "Component4",
              properties: [
                { name: "property1", type: "string" },
                { name: "property2", type: "int" },
                { name: "property3", type: "{}" }
              ],
              methods: [
                { name: "method1", returns: "int" },
                { name: "method2", returns: "string" },
                { name: "method3", returns: "[]" }
              ]
            }
          ]
        },
        {
          id: uniqid(),
          title: "Control Module",
          components: [
            {
              title: "Component5",
              properties: [
                { name: "property1", type: "string" },
                { name: "property2", type: "int" },
                { name: "property3", type: "{}" }
              ],
              methods: [
                { name: "method1", returns: "int" },
                { name: "method2", returns: "string" },
                { name: "method3", returns: "[]" }
              ]
            },
            {
              title: "Component6",
              properties: [
                { name: "property1", type: "string" },
                { name: "property2", type: "int" },
                { name: "property3", type: "{}" }
              ],
              methods: [
                { name: "method1", returns: "int" },
                { name: "method2", returns: "string" },
                { name: "method3", returns: "[]" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: uniqid(),
      name: "devmap2",
      author: "mohammadtourj",
      modules: [
        {
          id: uniqid(),
          title: "View Module 2",
          components: [
            {
              title: "Component1",
              properties: [
                { name: "property1", type: "string" },
                { name: "property2", type: "int" },
                { name: "property3", type: "{}" }
              ],
              methods: [
                { name: "method1", returns: "int" },
                { name: "method2", returns: "string" },
                { name: "method3", returns: "[]" }
              ]
            },
            {
              title: "Component2",
              properties: [
                { name: "property1", type: "string" },
                { name: "property2", type: "int" },
                { name: "property3", type: "{}" }
              ],
              methods: [
                { name: "method1", returns: "int" },
                { name: "method2", returns: "string" },
                { name: "method3", returns: "[]" }
              ]
            }
          ]
        },
        {
          id: uniqid(),
          title: "Data Module",
          components: [
            {
              title: "Component3",
              properties: [
                { name: "property1", type: "string" },
                { name: "property2", type: "int" },
                { name: "property3", type: "{}" }
              ],
              methods: [
                { name: "method1", returns: "int" },
                { name: "method2", returns: "string" },
                { name: "method3", returns: "[]" }
              ]
            },
            {
              title: "Component4",
              properties: [
                { name: "property1", type: "string" },
                { name: "property2", type: "int" },
                { name: "property3", type: "{}" }
              ],
              methods: [
                { name: "method1", returns: "int" },
                { name: "method2", returns: "string" },
                { name: "method3", returns: "[]" }
              ]
            }
          ]
        },
        {
          id: uniqid(),
          title: "Control Module",
          components: [
            {
              title: "Component5",
              properties: [
                { name: "property1", type: "string" },
                { name: "property2", type: "int" },
                { name: "property3", type: "{}" }
              ],
              methods: [
                { name: "method1", returns: "int" },
                { name: "method2", returns: "string" },
                { name: "method3", returns: "[]" }
              ]
            },
            {
              title: "Component6",
              properties: [
                { name: "property1", type: "string" },
                { name: "property2", type: "int" },
                { name: "property3", type: "{}" }
              ],
              methods: [
                { name: "method1", returns: "int" },
                { name: "method2", returns: "string" },
                { name: "method3", returns: "[]" }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Actions go here
    case actions.LOGIN:
      localStorage.setItem("token", action.payload.username);
      return {
        ...state,
        token: action.payload.username
      };
    case actions.RENAME_MODULE:
      return renameModule(state, action);
    case actions.RENAME_COMPONENT:
      return renameComponent(state, action);
    case actions.DELETE_COMPONENT:
      return deleteComponent(state, action);
    case actions.DELETE_PROPERTY:
      return deleteProperty(
        state,
        action.payload.moduleId,
        action.payload.componentName,
        action.payload.newComponent
      );
    case actions.DELETE_METHOD:
      return deleteMethod(
        state,
        action.payload.moduleId,
        action.payload.componentName,
        action.payload.newComponent
      );
    case actions.SET_CURRENT_MAP:
      return {
        ...state,
        currentMap: action.payload
      };
    default:
      return state;
  }
};

const deleteComponent = (state, action) => {
  // Find target map index
  // Change the state map at index found to a new map
  //
  // This new map will be the original map, with the module at index of target module modified
  // The new module will be the original module, with the components proprty changed

  const maps = Array.from(state.maps);
  const map = maps.find(map => map.id === state.currentMap);
  const module = map.modules.find(
    module => module.id === action.payload.moduleId
  );
  module.components = action.payload.newComponents;
  return {
    ...state,
    maps
  };
};

const deleteMethod = (state, moduleId, componentName, newComponent) => {
  const maps = Array.from(state.maps);
  const map = maps.find(map => map.id === state.currentMap);
  const module = map.modules.find(module => module.id === moduleId);
  const targetComponentIndex = module.components.findIndex(
    component => component.title === componentName
  );
  module.components[targetComponentIndex] = newComponent;

  return {
    ...state,
    maps
  };
};

const deleteProperty = (state, moduleId, componentName, newComponent) => {
  const maps = Array.from(state.maps);
  const map = maps.find(map => map.id === state.currentMap);
  const module = map.modules.find(module => module.id === moduleId);
  const targetComponentIndex = module.components.findIndex(
    component => component.title === componentName
  );
  module.components[targetComponentIndex] = newComponent;

  return {
    ...state,
    maps
  };
};

const renameComponent = (state, action) => {
  const maps = Array.from(state.maps);
  const map = maps.find(map => map.id === state.currentMap);
  const module = map.modules.find(
    module => module.id === action.payload.moduleId
  );
  const component = module.components.find(
    component => component.title === action.payload.componentName
  );
  component.title = action.payload.newName;

  return {
    ...state,
    maps
  };
};

const renameModule = (state, action) => {
  const maps = Array.from(state.maps);
  const map = maps.find(map => map.id === state.currentMap);
  const module = map.modules.find(
    module => module.id === action.payload.moduleId
  );
  module.title = action.payload.newName;

  return {
    ...state,
    maps
  }
};

export default reducer;
