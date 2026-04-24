/**
 * Node.js Path Module Documentation and Examples
 * 
 * The 'path' module provides utilities for working with file and directory paths.
 */

import path from 'path';
import { fileURLToPath } from 'url';

// ==========================================
// 1. Handling __dirname and __filename in ES Modules
// ==========================================
// In ES modules (type: module), __dirname and __filename are not available.
// We can reconstruct them using import.meta.url:

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('__filename:', __filename);
console.log('__dirname:', __dirname);


// ==========================================
// 2. path.basename()
// ==========================================
// Returns the last portion of a path.
const base = path.basename(__filename);
console.log('Basename:', base); // e.g., 'path.js'

// You can also strip the extension
const baseWithoutExt = path.basename(__filename, '.js');
console.log('Basename without extension:', baseWithoutExt); // 'path'


// ==========================================
// 3. path.dirname()
// ==========================================
// Returns the directory name of a path.
const dir = path.dirname(__filename);
console.log('Dirname:', dir);


// ==========================================
// 4. path.extname()
// ==========================================
// Returns the extension of the path.
const ext = path.extname(__filename);
console.log('Extension:', ext); // '.js'


// ==========================================
// 5. path.parse() vs path.format()
// ==========================================
// path.parse() returns an object whose properties represent significant elements of the path.
const pathObj = path.parse(__filename);
console.log('Parsed path:', pathObj);
/*
Output looks like:
{
  root: '/',
  dir: '/home/user/project/nodejs',
  base: 'path.js',
  ext: '.js',
  name: 'path'
}
*/

// path.format() returns a path string from an object (inverse of path.parse)
const formattedPath = path.format(pathObj);
console.log('Formatted path:', formattedPath);


// ==========================================
// 6. path.join()
// ==========================================
// Joins all given path segments together using the platform-specific separator.
// It also normalizes the resulting path.
const joinedPath = path.join(__dirname, 'uploads', 'images', 'profile.png');
console.log('Joined path:', joinedPath);


// ==========================================
// 7. path.resolve()
// ==========================================
// Resolves a sequence of paths or path segments into an absolute path.
// It works from right to left, prepending each path until an absolute path is created.
const resolvedPath = path.resolve('uploads', 'images', 'profile.png');
console.log('Resolved path (absolute):', resolvedPath);


// ==========================================
// 8. path.normalize()
// ==========================================
// Normalizes the given path, resolving '..' and '.' segments.
const messyPath = '/user/local/../bin/./scripts';
const cleanPath = path.normalize(messyPath);
console.log('Normalized path:', cleanPath); // '/user/bin/scripts'


// ==========================================
// 9. path.isAbsolute()
// ==========================================
// Determines if path is an absolute path.
console.log('Is absolute?', path.isAbsolute('/foo/bar')); // true
console.log('Is absolute?', path.isAbsolute('foo/bar'));  // false
