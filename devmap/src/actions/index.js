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
export const RENAME_METHOD = 'RENAME_METHOD';
export const DELETE_METHOD = 'DELETE_METHOD';
export const CREATE_PROPERTY = 'CREATE_PROPERTY';
export const RENAME_PROPERTY = 'RENAME_PROPERTY';
export const DELETE_PROPERTY = 'DELETE_PROPERTY';
export const LOGIN = 'LOGIN';

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

export const renameComponent = (mapId, componentName, newName) => dispatch => {
  dispatch (
    {
      type: RENAME_COMPONENT,
      payload: {
        mapId,
        componentName,
        newName
      }
    }
  )
}