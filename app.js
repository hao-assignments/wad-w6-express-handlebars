const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();

// Cấu hình Handlebars
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'src/views/layouts'),
    partialsDir: path.join(__dirname, 'src/views/partials')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/views'));

// Định nghĩa thư mục chứa các file tĩnh
app.use(express.static(path.join(__dirname, 'src/public')));

// Import và sử dụng các controllers
const homeRouter = require('./src/controllers/homeController');
const aboutRouter = require('./src/controllers/aboutController');
const contactRouter = require('./src/controllers/contactController');

app.use('/', homeRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);

// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});