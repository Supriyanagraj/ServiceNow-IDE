import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "247326390361429894bf1b236729ec6d"
                        },
                        "src_server_script_ts": {
                            "table": "sys_module",
                            "id": "91774e91c7ac4b798a55f72dde0e3f86"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "464151675293403d8e7116ec20783b4d"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "929b989c2da1469a806cc08fb0d984a8"
                        }
                    };
                composite: [
                        {
                            "table": "sys_module",
                            "id": "dad5808cab364211be8d9c48c7eb6447",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "index.js"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "e74e0cd71df443d8bc92409cc60839b1",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "cyclonedx/bom.json"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "b18012cadec84e809d87d5d6f46b6004",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "package.json"
                            }
                        }
                    ];
            }
        }
    }
}
