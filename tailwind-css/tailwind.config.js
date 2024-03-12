/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  //   content: [
  //     "./node_modules/flowbite/**/*.js"
  // ],
  theme: {
    extend: {},
  },
  //* when we want to use a plugin, it must be added to config file
  // plugins: [ require('flowbite/plugin')],
}

