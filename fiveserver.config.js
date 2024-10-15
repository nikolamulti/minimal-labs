// fiveserver.config.js
module.exports = {
  // ...
  watch: "src",
  ignore: [/\.s[ac]ss$/i, /\.tsx?$/i],
  injectBody: `
    <script>
      window.addEventListener('message', function(event) {
        if (event.data === 'connected') {
          console.log('[HMR] Connected');
        }
      });
    </script>
  `,
};
