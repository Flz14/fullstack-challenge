import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MessagesService from "../services/Messages.service";
import { v4 as uuidv4 } from 'uuid';
import { KEYS_MESSAGES } from "../constants";

export const getMessage = createAsyncThunk(
    "getMessage",
    async (data, thunkAPI) => {
        try {
            const result = await MessagesService.fetchMessage();
            if (!result.success) {
                throw new Error(result.data)
            }
            return result.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);


export const slice = createSlice({
    name: "messages",
    initialState: {
        errors: {
            messages: [],
            counter: 0
        },
        warnings: {
            messages: [],
            counter: 0
        },
        infos: {
            messages: [],
            counter: 0
        },
        stop: false
    },

    reducers: {
        deleteMessage: (state, action) => {
            
            const { type, id } = action.payload;
            state[KEYS_MESSAGES[type]].messages = state[KEYS_MESSAGES[type]].messages.filter(message => message.id !== id)
            state[KEYS_MESSAGES[type]].counter -= 1
        },

        deleteAllMessages: (state, action) => {
            state.errors = {
                messages: [],
                counter: 0,
            }
            state.warnings = {
                messages: [],
                counter: 0,
            }
            state.infos = {
                messages: [],
                counter: 0,
            }
        },
        toggleMessages: (state, action) => {
            state.stop = !state.stop;
        },
    },

    extraReducers: {
        [getMessage.fulfilled]: (state, action) => {
            const { type, message } = action.payload;

            state[KEYS_MESSAGES[type]] = {
                messages: [...state[KEYS_MESSAGES[type]].messages, { id: uuidv4(), text: message }],
                counter: state[KEYS_MESSAGES[type]].counter + 1,
            }
        },

        [getMessage.rejected]: (state, action) => {
            console.log('ERROR', action)
        },
    },
});

export const { toggleMessages, deleteAllMessages, deleteMessage } = slice.actions;

export default slice.reducer;

