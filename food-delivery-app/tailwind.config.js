/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
      regularFont:["regularFont" , "sans serif"],
      boldFont:["boldFont","sans serif"],
      extraBoldFont:["extraBoldFont","sans serif"],
      semiBoldFont:["semiBoldFont","sans serif"],
     
    },
    colors: {
        buttonPrimary : ["#254F1A"],
        buttonSecondary : ["#B6E5A5"],
        fontPrimary : ["#3A3A3A"],
        modelPrimary : ["#EAECCC"]
    },
    letterSpacing: {
      tighter2: '-0.06em',
      extra: '0.2em',
      loose: '2px',
    },
  },
  },
  plugins: [],
}