export const CREATE_MAP = 'CREATE_MAP';
export const RENAME_MAP = 'RENAME_MAP';
export const DELETE_MAP = 'DELETE_MAP';
export const CREATE_MODULE = 'CREATE_MODULE';
export const RENAME_MODULE = 'RENAME_MODULE';
export const DELETE_MODULE = 'DELETE_MODULE';
export const CREATE_COMPONENT = 'CREATE_COMPONENT';
export const RENAME_COMPONENT = 'RENAME_COMPONENT';
export const DELETE_COMPONENT = 'DELETE_COMPONENT';
export const CREATE_METHOD = 'CREATE_METHOD';
export const CREATE_PROPERTY = 'CREATE_PROPERTY';
export const RENAME_PROPERTY = 'RENAME_PROPERTY';
export const SET_PROPERTY_TYPE = 'SET_PROPERTY_TYPE';
export const DELETE_PROPERTY = 'DELETE_PROPERTY';
export const LOGIN = 'LOGIN';
export const SET_CURRENT_MAP = 'SET_CURRENT_MAP';

export const createMap = title => dispatch => {
  dispatch ( {
    type: CREATE_MAP,
    payload: title
  });
}

export const deleteMap = id => dispatch => {
  dispatch ( {
    type: DELETE_MAP,
    payload: id
  });
}

export const createModule = (mapId, title) => dispatch => {
  dispatch ( {
    type: CREATE_MODULE,
    payload: {
      mapId,
      title
    }
  });
}

export const renameModule = (moduleId, newName) => dispatch => {
  dispatch (
    {
      type: RENAME_MODULE,
      payload: {
        moduleId,
        newName
      }
    }
  )
}

export const deleteModule = (mapId, moduleId) => dispatch => {
  dispatch ( {
    type: DELETE_MODULE,
    payload: {
      mapId,
      moduleId
    }
  });
}

export const login = (username, password) => dispatch => {
  dispatch ( {
    type: LOGIN,
    payload: {
      username,
      password
    }
  });
}

export const renameComponent = (moduleId, componentName, newName) => dispatch => {
  dispatch (
    {
      type: RENAME_COMPONENT,
      payload: {
        moduleId,
        componentName,
        newName
      }
    }
  )
}

export const deleteComponent = (moduleId, newComponents) => dispatch => {
  dispatch (
    {
      type: DELETE_COMPONENT,
      payload: {
        moduleId,
        newComponents
      }
    }
  )
}

export const deleteProperty = (moduleId, componentName, newComponent) => dispatch => {
  console.log('action created');
  dispatch ({
    type: DELETE_PROPERTY,
    payload: {
      moduleId,
      componentName,
      newComponent
    }
  })
}

export const setCurrentMap = map => dispatch => {
  dispatch (
    {
      type: SET_CURRENT_MAP,
      payload: map
    }
  );
}

export const renameProperty = (moduleId, componentName, newComponent) => dispatch => {
  dispatch(
    {
      type: RENAME_PROPERTY,
      payload: {
        moduleId,
        componentName,
        newComponent
      }
    }
  )
}

export const setPropertyType = (moduleId, componentName, newComponent) => dispatch => {
  dispatch ({
    type: SET_PROPERTY_TYPE,
    payload: {
      moduleId,
      componentName,
      newComponent
    }
  })
}