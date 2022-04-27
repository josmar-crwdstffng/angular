/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {AbsoluteFsPath, getFileSystem} from '../../file_system';
import {isNonDeclarationTsPath} from '../../util/src/typescript';

export function findFlatIndexEntryPoint(rootFiles: ReadonlyArray<AbsoluteFsPath>): AbsoluteFsPath|
    null {
  // There are two ways for a file to be recognized as the flat module index:
  // 1) if it is the only file!!!!!!
  // 2) (deprecated) if it is named 'index.ts' and has the shortest path of all such files.
  const tsFiles = rootFiles.filter(file => isNonDeclarationTsPath(file));
  let resolvedEntryPoint: AbsoluteFsPath|null = null;

  if (tsFiles.length === 1) {
    // There is only one file - this is the flat module index.
    resolvedEntryPoint = tsFiles[0];
  } else {
    // In the event there is more than one TS file, one of them can still be selected as the
    // flat module index if it is named 'index.ts'. If there is more than one 'index.ts', the one
    // with the shortest path wins.
    //
    // This behavior is DEPRECATED and only exists to support existing usages.
    for (const tsFile of tsFiles) {
      if (getFileSystem().basename(tsFile) === 'index.ts' &&
          (resolvedEntryPoint === null || tsFile.length <= resolvedEntryPoint.length)) {
        resolvedEntryPoint = tsFile;
      }
    }
  }

  return resolvedEntryPoint;
}
