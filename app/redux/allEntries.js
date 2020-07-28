import axios from "axios";
import entry from "../../server/db/entry";

const initialState = { entries: [] };

const GET_ENTRIES = "GET_ENTRIES";
const NEW_ENTRY = "NEW_ENTRY";
const REMOVE_ENTRY = "REMOVE_ENTRY";

const getEntries = (entries) => ({
  type: GET_ENTRIES,
  entries,
});

const newEntry = (entry) => ({
  type: NEW_ENTRY,
  entry,
});

const removeEntry = (entry) => ({ type: REMOVE_ENTRY, entry });

const fetchEntries = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/entries", {
        title: entry.title,
        imageUrl: entry.imageUrl,
        content: entry.content,
        tags: entry.tags,
        date: entry.date,
      });
      dispatch(getEntries(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const addNewEntry = (entry) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/");
      dispatch(newEntry(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const deleteEntry = (entry) => {
  return async (dispatch) => {
    await axios.delete(`/api/entries/${entry.id}`);
    dispatch(removeEntry(entry));
  };
};

export default function entriesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ENTRIES:
      return { ...state, entries: action.entries };

    case NEW_ENTRY:
      return { ...state, entries: [state.entries, action.entry] };

    case REMOVE_ENTRY:
      return {
        ...state,
        entries: state.entries.filter((entry) => entry.id !== action.entry.id),
      };
    default:
      return state;
  }
}
