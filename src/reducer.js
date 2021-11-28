export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  currentTrack: null,
  // token:
  //   "BQCxkvK-7pz7JdsulZd96WChQQqIlX7R9tIfDEjtyyMdKAjtn9…JjJYasgpBiJqB60Woe-KX6aWr37VSoZi99EGYcBpWe9i3OYww",
};

const reducer = (state, action) => {
  console.log(action);
  // action : type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_CURRENT_TRACK":
      return {
        ...state,
        currentTrack: action.currentTrack,
      };

    default:
      return state;
  }
};

export default reducer;
