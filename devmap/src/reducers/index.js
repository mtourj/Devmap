import uniqid from 'uniqid';
import * as actions from '../actions';

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
  token: localStorage.getItem('token'),
  currentMap: "",
  maps: [
    {
      id: uniqid(),
      name: "devmap1",
      author: "devmaps",
      modules: [
        {
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
  switch(action.type) {
    // Actions go here
    case actions.LOGIN:
      console.log('tryna login!');
      localStorage.setItem('token', action.payload.username);
      return {
        ...state,
        token: action.payload.username
      }
    case actions.RENAME_COMPONENT:
      console.log('renaming ' + action.payload.componentName + ' to ' + action.payload.newName);
      
    default:
      return state;
  }
};

export default reducer;
