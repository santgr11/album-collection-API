const { APP_CONFIG } = require('./utils/config');
const app = require('./app');

app.listen(APP_CONFIG.PORT, () => console.log(`Connected to port ${APP_CONFIG.PORT}`));
