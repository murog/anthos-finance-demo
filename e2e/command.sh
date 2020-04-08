#!/bin/bash

cypress run && chown 1001 -R cypress/screenshots/

ls -l cypress
