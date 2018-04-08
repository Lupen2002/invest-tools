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

let rasSchema = {
    "type": "object",
    properties
};

function _isEmpty(obj) {
    return (Object.getOwnPropertyNames(obj).length >= 1);
}

export function getRasSchema() {
    if (_isEmpty(properties)) {
        return rasSchema
    }
}

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