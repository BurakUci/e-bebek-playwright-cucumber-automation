Feature: E-bebek Website Automation

  Scenario: Kullanıcının giriş yapması, ürün araması, sepete eklemesi ve çıkış yapması
    Given kullanıcı e-bebek ana sayfasını açar
    When giriş yap butonuna tıklar
    And geçerli kullanıcı bilgilerini girer
    Then giriş işleminin başarılı olduğu doğrulanır
    When "biberon" kelimesiyle ürün aranır
    Then arama sonuçları görüntülenir
    When ilk ürün seçilir
    And ürün sepete eklenir
    Then ürünün sepete eklendiği doğrulanır
    When kullanıcı çıkış yapar
    Then çıkış işleminin başarılı olduğu doğrulanır
