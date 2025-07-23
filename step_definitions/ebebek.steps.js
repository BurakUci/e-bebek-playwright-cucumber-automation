require('dotenv').config();
console.log('EMAIL:', process.env.EBEBEK_EMAIL);
console.log('PASSWORD:', process.env.EBEBEK_PASSWORD);

const { Given, When, Then, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

const LoginPage = require('../pages/login.page');
const SearchPage = require('../pages/search.page');
const ProductPage = require('../pages/product.page');
const AccountPage = require('../pages/account.page');

setDefaultTimeout(30000);

let browser;
let page;
let loginPage;
let searchPage;
let productPage;
let accountPage;

Given('kullanıcı e-bebek ana sayfasını açar', async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();

    loginPage = new LoginPage(page);
    searchPage = new SearchPage(page);
    productPage = new ProductPage(page);
    accountPage = new AccountPage(page);

    await page.goto('https://www.e-bebek.com');
});

When('giriş yap butonuna tıklar', async function () {
    await loginPage.navigateToLoginPage();
});

When('geçerli kullanıcı bilgilerini girer', async function () {
    const { EBEBEK_EMAIL: email, EBEBEK_PASSWORD: password } = process.env;

    if (!email || !password) {
        throw new Error('Email ve şifre .env dosyasında tanımlı olmalıdır');
    }

    await loginPage.login(email, password);
    await page.waitForTimeout(5000);
});

Then('giriş işleminin başarılı olduğu doğrulanır', async function () {
    await page.goto('https://www.e-bebek.com/my-account/update-profile');
    await page.waitForLoadState('networkidle');

    const isProfilePage = await accountPage.verifyProfilePage();
    if (!isProfilePage) {
        throw new Error('Giriş başarısız - profil sayfası doğrulanamadı');
    }

    console.log('Giriş başarıyla doğrulandı!');
});

When('{string} kelimesiyle ürün aranır', async function (product) {
    await searchPage.searchProduct(product);
});

Then('arama sonuçları görüntülenir', async function () {
    await searchPage.verifySearchResults();
});

When('ilk ürün seçilir', async function () {
    await searchPage.selectFirstProduct();
});

When('ürün sepete eklenir', async function () {
    await productPage.addToBasket();
});

Then('ürünün sepete eklendiği doğrulanır', async function () {
    await productPage.goToBasket();
    await productPage.verifyProductAdded();
});

When('kullanıcı çıkış yapar', async function () {
    await accountPage.logout();
});

Then('çıkış işleminin başarılı olduğu doğrulanır', async function () {
    await accountPage.verifyLogout();
});

After(async function () {
    if (browser) {
        await browser.close();
    }
}); 
