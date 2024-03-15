/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  //   content: [
  //     "./node_modules/flowbite/**/*.js"
  // ],
  theme: {

    //* If we do not want to add our own instead of tailwind's default theme settings, we must add it in the extend object, otherwise the entire theme object will change and we cannot use anything other than the ones we added.
    //! dark mode etc. will not work if this is not added!!!!!!!

    extend: {
      colors: {
        primary: "#AC87C5",
        primary_hover: "#756AB6",
        dark: "#526D82",
        darker: "#27374D",
        blue: {
          950: "#17275c",
        },
      },
    },
  },
  //* when we want to use a plugin, it must be added to config file
  // plugins: [ require('flowbite/plugin')],
  darkMode: "class",
}

