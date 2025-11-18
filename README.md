# calendar-microservice
Microservice for handling calendar events in the Small Pool project.


## UML Diagram

```mermaid
sequenceDiagram
    participant Client
    participant Controllers
    participant Services
    participant Models
    participant Program Root
    participant Database
    Participant Docker

    Note right of Client: Sends JSON request to /api/events\nAwaits response
    Note right of ApiController: Receives JSON body\nValidates model\nCalls service layer\nReturns response
    Note right of DataService: Formats SQL queries\nExecutes DB commands\nMaps DB results to models
    Note right of EventModel: Represents event data\nUsed by controller/service
    Note right of Program: Configures routing & DI\nLoads appsettings.json
    Note right of Database: Executes SQL\nStores events\nInitialized by init.sql
    Note right of DockerCompose: Builds microservice image\nStarts service + DB containers\nRuns init.sql on DB start

    Client --> ApiController : sends JSON /api/events
    ApiController --> DataService : calls
    DataService --> Database : executes SQL
    ApiController --> EventModel : uses
    DataService --> EventModel : maps data

    Program --> ApiController
    Program --> DataService
    Program --> AppSettings

    DockerCompose --> Database
    DockerCompose --> InitSQL
    DockerCompose --> Dockerfile
    DockerCompose --> Program

```


## Contributors
Alexander Kronsup, Ryan Floyd, Rowan Whitmore, Anthony Pham
