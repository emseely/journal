import axios from "axios";
const SELECT_ENTRY = "SELECT_ENTRY";
const UPDATE_ENTRY = "UPDATE_ENTRY";

const initialState = {};

const selectEntry = (entry) => {
  return {
    type: SELECT_ENTRY,
    entry,
  };
};

const updateEntry = (entry) => {
  return {
    type: UPDATE_ENTRY,
    entry,
  };
};

export const fetchSingleEntry = (entry) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/entries/${entry.id}`);
      dispatch(delectEntry(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateThisEntry = (entry) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/entries/${entry.id}`, {
        newTitle: entry.title,
        newImageUrl: entry.imageUrl,
        newContent: entry.content,
        newTags: entry.tags,
      });
      dispatch(updateEntry(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export default function singleEntryReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_ENTRY:
      return action.entry;
    case UPDATE_ENTRY:
      return action.campus;
    default:
      return state;
  }
}
