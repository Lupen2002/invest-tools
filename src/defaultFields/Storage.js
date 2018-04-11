import React, {Component} from "react";
import {_isEmpty, createNewSchema} from "./Const";

class Storage {
    getSchema() {
    }

    createProperties() {
    }

    newSchema() {
    }
}

let rasProperties = {};
let rasID = 0;

class RasStorage extends Storage {

    getSchema() {
        let properties = rasProperties;
        if (_isEmpty(properties)) {
            return {
                "type": "object",
                properties
            };
        }
    }

    createProperties(name) {
        rasProperties[rasID] = {
            "tmp": {
                "type": "string",
                "title": name
            },
        }["tmp"];
        rasID += 1;
    }

    newSchema() {
        createNewSchema("New RAS value")
    };
}

let ifrsProperties = {};
let ifrsID = 0;

class IFRSStorage extends Storage {

    getSchema() {
        let properties = ifrsProperties;
        if (_isEmpty(properties)) {
            return {
                "type": "object",
                properties
            };
        }
    }

    createProperties(name) {
        ifrsProperties[ifrsID] = {
            "tmp": {
                "type": "string",
                "title": name
            },
        }["tmp"];
        ifrsID += 1;
    };

    newSchema() {
        createNewSchema("New IFRS value")
    };
}

class UndefinedStorage extends Storage {
    getSchema() {
        return undefined
    }

    newSchema() {
        return createNewSchema("New IFRS value")
    }
}

export const builderSchema = (type) => {
    if (type === "IFRS") {
        return new IFRSStorage();
    } else if (type === "RAS") {
        return new RasStorage();
    } else {
        return new UndefinedStorage();
    }
};

export default Storage;