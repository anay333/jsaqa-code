Feature: Cinema Ticket

    Scenario: Should user book one ticket
        Given user is on "/index.php"
        When user chooses day 2
        When user chooses "time" 
        When user chooses "chair"
        When user click "button" 
        Then user received "Вы выбрали билеты:"

    Scenario: Should user book two tickets
        Given user is on "/index.php"
        When user chooses day 2
        When user chooses "time" 
        When user chooses "chair"
        When user click "button" 
        Then user received "Вы выбрали билеты:"

    Scenario: Should not book taken chair
        Given user is on "/index.php"
        When user chooses day 2
        When user chooses "time" 
        When user chooses "chair"
        When user click "button" 
        Then user sees button "disabled"
