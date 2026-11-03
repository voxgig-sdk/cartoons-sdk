"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "cartoon",
        "accessor": "Cartoon",
        "op": "list",
        "method": "GET",
        "path": "/cartoons/cartoons2D",
        "action": "cartoons2_d",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": [
            {
                "id": 1,
                "title": "SpongeBob SquarePants",
                "year": 1999,
                "creator": [
                    "Stephen Hillenburg"
                ],
                "rating": "TV-Y7",
                "genre": [
                    "Comedy",
                    "Family"
                ],
                "runtime_in_minutes": 23,
                "episodes": 272,
                "image": "https://example.com/image.jpg"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "cartoon",
        "accessor": "Cartoon",
        "op": "list",
        "method": "GET",
        "path": "/cartoons/cartoons3D",
        "action": "cartoons3_d",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": [
            {
                "id": 1,
                "title": "SpongeBob SquarePants",
                "year": 1999,
                "creator": [
                    "Stephen Hillenburg"
                ],
                "rating": "TV-Y7",
                "genre": [
                    "Comedy",
                    "Family"
                ],
                "runtime_in_minutes": 23,
                "episodes": 272,
                "image": "https://example.com/image.jpg"
            }
        ],
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map