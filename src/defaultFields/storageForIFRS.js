let properties = {};
let id = 0;

export function createIfrsProperties(name) {
    properties[id] = {
        "tmp": {
            "type": "string",
            "title": name
        },
    }["tmp"];
    id += 1;
}

export let getIfrsSchema = {
    "type": "object",
    properties
};

export let newIfrsSchema = {
    "type": "object",
    "required": [
        "newValue"
    ],
    "properties": {
        "newValue": {
            "type": "string",
            "title": "New IFRS value"
        },
    }
};

export let ifrsPropsEmpty = properties.length > 0;