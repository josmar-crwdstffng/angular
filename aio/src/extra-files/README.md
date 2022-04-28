# Extra files directory

This directory is used for extra files that should be included in deployments to firebase.

After the AIO application had been built and before it is deployed all files and directories inside the directory with the same name as the current deployment mode (next, stable, archive) will be copied to the `dist` directory.

See the `scripts/deploy-to-firebase/index.mjs` script for more details.

**Note:**
The script always expects there to be a directory for the current deployment mode (even if it is empty).
