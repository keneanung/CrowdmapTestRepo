#!/bin/env bash

set -euo pipefail

jq_script="walk(if type == \"array\" then sort else . end)"
file1=old/Map/map.json
file2=current/Map/map.json

diff -u5 <(jq --sort-keys "$jq_script" < "$file1") <(jq --sort-keys "$jq_script" < "$file2")