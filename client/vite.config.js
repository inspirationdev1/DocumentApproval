import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
// export default defineConfig({
//   server: {
//     proxy: {
//       "/api": {
//         target: "http://localhost:3000",
//         secure: false,
//       },
//     },
//   },

//   plugins: [react()],
// });

export default defineConfig({
  server: {
    proxy: {
      "/api": { target: "http://localhost:3000", secure: false },
    },
  },
  plugins: [react()],
});

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: "localhost",
//     port: 3000,
//   },
// });
