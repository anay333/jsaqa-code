Feature: The first link leads on booking page
    Scenario: Choosing time
    Given user is on "/index.php" page
    When user clicksElement "пятница"
    When user clicksNextElement "сеанс"
    Then user sees the page "Забронировать"
