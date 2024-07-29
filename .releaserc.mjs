/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  plugins: [
    // to get docker container export image 3
    // https://github.com/felipecrs/semantic-release-export-data#github-actions-example
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    'semantic-release-export-data',
    '@semantic-release/github'
  ]
};
