import { useState, useEffect } from "react";

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = (shouldListen=true) => {
    const [_, setState] = useState();//"abusing" useState here to make a component to re-render

    const dispatch = (actionId, payload) => {
        const newState = actions[actionId](globalState, payload);
        globalState = { ...globalState, ...newState };

        for (const listener of listeners) {
            listener({});//setState will re-render only if there are changes(each object is unique)
        }
    };

    useEffect(() => {
        if(shouldListen) {
            listeners.push(setState);
        }
        return () => {
            if(shouldListen)
                listeners = listeners.filter(listener => listener !== setState);
        }
    }, []);

    return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
    if(initialState) {
        globalState = { ...globalState, ...initialState };
    }
    actions = { ...actions, ...userActions };
};