#!/bin/bash

curl \
  http://0.0.0.0:13987/send \
  -v \
  -X POST \
  -H "Content-Type: application/json" \
  -d @- << EOF
{
  "templateId": "example",
  "strategies": "fcm",
  "data": {
    "to": "",
    "payload": {}
  }
}
EOF
