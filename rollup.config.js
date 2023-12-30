import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import css from 'rollup-plugin-css-only'; // Import the plugin

export default {
  input: 'client/src/main.jsx', // Replace with your entry point file

  output: {
    file: 'dist/bundle.js', // Replace with your desired output file
    format: 'es', // Choose the appropriate format (e.g., es, cjs, umd)
  },

  plugins: [
    resolve(), // Resolves node_modules
    commonjs(), // Converts CommonJS to ES modules
    babel({
      presets: ['@babel/preset-env', '@babel/preset-react'],
      babelHelpers: 'bundled',
      exclude: 'node_modules/**', // Exclude node_modules from babel transformation
    }),
    css({ output: 'dist/bundle.css' }), // Specify output CSS file
    // Add more plugins as needed
  ],
};
