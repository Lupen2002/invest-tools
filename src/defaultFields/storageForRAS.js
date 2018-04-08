
let properties = {};
let id = 0;

export function createRasProperties(name) {
    properties[id] = {
        "tmp": {
            "type": "string",
            "title": name
        },
    }["tmp"];
    id += 1;
}

export let getRasSchema = {
    "type": "object",
    properties
};

export let newRasSchema = {
    "type": "object",
    "required": [
        "newValue"
    ],
    "properties": {
        "newValue": {
            "type": "string",
            "title": "New RAS value"
        },
    }
};

export let rasPropsEmpty = properties.length > 0;