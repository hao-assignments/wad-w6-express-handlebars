const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();

// Cấu hình Handlebars
app.engine('hbs', engine({
    extname: '.hbs',                                        // Định dạng file là .hbs
    defaultLayout: 'main',                                  // Layout chính
    layoutsDir: path.join(__dirname, 'src/views/layouts'),  // Thư mục chứa layout
    partialsDir: path.join(__dirname, 'src/views/partials') // Thư mục chứa các partials
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/views'));

// Định nghĩa thư mục chứa các file tĩnh
app.use(express.static(path.join(__dirname, 'src/public')));

// Import và sử dụng các controllers
const aboutRouter = require('./src/controllers/aboutController');
const cardRouter = require('./src/controllers/cardController');
const checkoutRouter = require('./src/controllers/checkoutController');
const contactRouter = require('./src/controllers/contactController');
const detailRouter = require('./src/controllers/detailController');
const indexRouter = require('./src/controllers/indexController');
const loginRouter = require('./src/controllers/loginController');
const registerRouter = require('./src/controllers/registerController');
const shopRouter = require('./src/controllers/shopController');

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/card', cardRouter);
app.use('/checkout', checkoutRouter);
app.use('/contact', contactRouter);
app.use('/detail', detailRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/shop', shopRouter);

// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});