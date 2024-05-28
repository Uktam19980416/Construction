/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'main-image': "url('./src/images/city1.51e44d49b1c61434ca07.jpeg')",
        'our-company': "url('./src/images/rating.9f9cda4caaf5d31ba7bb.png')",
        pr1: "linear-gradient(rgba(0, 0, 0, 0.3) 60%, rgb(0, 0, 0)), url('./src/images/projects.53437eda10adf8ee97f3.jpg')",
        pr2: "linear-gradient(rgba(0, 0, 0, 0.3) 60%, rgb(0, 0, 0)), url('./src/images/project.90d0ad1f2b01cab38a88.jpg')",
        pr3: "linear-gradient(rgba(0, 0, 0, 0.3) 60%, rgb(0, 0, 0)), url('./src/images/prezident.39ffbd8cd3007f491559.jpg')",
        pr4: "linear-gradient(rgba(0, 0, 0, 0.3) 60%, rgb(0, 0, 0)), url('./src/images/school.40d7b4718a3ea2005b09.jpg')",
        pr5: "linear-gradient(rgba(0, 0, 0, 0.3) 60%, rgb(0, 0, 0)), url('./src/images/image.55d1ad86051dd5af382b.jpg')",
        pr6: "linear-gradient(rgba(0, 0, 0, 0.3) 60%, rgb(0, 0, 0)), url('./src/images/image1.59ddf8dcd5ee2719efdc.jpg')",
      },
      maxWidth: {
        'iphone': '460px',
      },
    },
    translate: {
      200: '300px',
    },
    transitionTimingFunction: {
      'ease-in-out': 'ease-in-out',
    },
    transitionDuration: {
      500: '500ms',
    },
    maxWidth: {
      '460': '460px',
    },
    screens: {
      "smallest": "320px",
      "iphone": '460px',
      "sm": '640px',
      "md": '768px',
      "lg": '1024px',
      "xl": '1280px',
      "2xl": '1536px',
    },
  },
  plugins: [],
}
