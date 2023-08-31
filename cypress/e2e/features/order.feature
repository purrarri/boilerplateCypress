
@Case01
Scenario Outline : 
    Given As in the following building return the following list of rooms
    Return current room condition as
        |       rooms       |       room_status     |
        |       accessible  |       VR              |
        |       accessible  |       VR              |
        |       accessible  |       VR              |
        |       accessible  |       VR              |
        |       accessible  |       VR              |
        |       accessible  |       VR              |
        |       ....        |       ....            |
    And current order list as
        |  order id   |  order_status | check_in | check_out | confirm_checkout  |
        |   xx        |    xxx        |   xx     |   xx      |   xxx             |
        |   xx        |    xxx        |   xx     |   xx      |   xxx             |
        |   xx        |    xxx        |   xx     |   xx      |   xxx             |
        |   xx        |    xxx        |   xx     |   xx      |   xxx             |
        |   xx        |    xxx        |   xx     |   xx      |   xxx             |
        |   ...       |    ...        |   ...    |   ...     |   ...             |
        
    When
        When User navigate to generate order by <ReqCheckIn>
        ...
    Then return <Result>

    |  ReqCheckIn   |  ReqCheckOut    | Result          |
    |  xxxx         |  xxxx           | xxx             |
    |  xxxx         |  xxxx           | xxx             |
    |  xxxx         |  xxxx           | xxx             |
    |  xxxx         |  xxxx           | xxx             |
    |  xxxx         |  xxxx           | xxx             |
    |  xxxx         |  xxxx           | xxx             |
    |  ...          |  ...            | ...             |

    When