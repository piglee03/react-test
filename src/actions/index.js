import * as types from './actionTypes';

export function add(id, text, done) {
    return {
        type: types.ADD,
        id,
        text,
        done
    };
}

export function remove(id) {
    return {
        type: types.REMOVE,
        id
    };
}

export function done(id) {
    return {
        type: types.DONE,
        id
    };
}
