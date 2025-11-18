# calendar-microservice
Microservice for handling calendar events in the Small Pool project.


## UML Diagram

```
classDiagram
    %% ============================
    %% CLIENT (TEST folder)
    %% ============================
    class Client {
        <<JavaScript>>
        TEST/index.js
        +sendJsonRequest()
        +awaitResponse()
    }

    %% ============================
    %% CONTROLLERS (SRC/Controllers)
    %% ============================
    class ApiController {
        <<C# Controller>>
        SRC/Controllers/ApiController.cs
        +GetEvents()
        +PostEvents()
        +ReturnResponse()
    }

    %% ============================
    %% SERVICES (SRC/Services)
    %% ============================
    class DataService {
        <<C# Service>>
        SRC/Services/DataService.cs
        +FormatSqlQuery()
        +ExecuteQuery()
    }

    %% ============================
    %% MODELS (SRC/Models)
    %% ============================
    class EventModel {
        <<C# Model>>
        SRC/Models/Event.cs
        +id : int
        +title : string
        +date : datetime
    }

    %% ============================
    %% PROGRAM ROOT
    %% ============================
    class Program {
        <<C# EntryPoint>>
        SRC/Program.cs
        +ConfigureServices()
        +ConfigureRouting()
    }

    class AppSettings {
        appsettings.json
        +ConnectionStrings
    }

    %% ============================
    %% DATABASE
    %% ============================
    class Database {
        <<SQL Database>>
        Started by Docker
        +ProcessQueries()
    }

    class InitSQL {
        init.sql
        +CreateTables()
        +SeedData()
    }

    %% ============================
    %% DOCKER
    %% ============================
    class DockerCompose {
        compose.yaml
        +StartMicroservice()
        +StartDatabase()
        +RunInitSQL()
    }

    class Dockerfile {
        Dockerfile
        +BuildMicroserviceImage()
    }

    %% ============================
    %% RELATIONSHIPS
    %% ============================
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
