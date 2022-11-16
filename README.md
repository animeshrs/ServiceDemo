# CompanyRepository

Just change the database connection string in the appsettings.Development.json file and the project should be good to go.
There is no need of any sql scripts or any other settings to run the project as these have been taken care in the code itself.
I have created different types of controllers in the project.
One is the .Net 6 Web Api controller
Other is a microservice.
There is a API Gateway, which is serving for both WebAPI and Microservice
I have tried to create CRUD operations on 2 types of data
For the Login, I have made use of JWT authentication
For database, I have used SQL Server database.
For initial demo, I have seeded data with some hard-coded values
I have tried to follow few design patterns as well like Factory, Repository etc in the project
The microservice is independent of the web api project. Api gateway is taking care of its port-mapping
There is heavy use of Generics and Concurrency in the project.
For the front end, I have made use of React js.
For the css part, I have made use of semantic-ui & Styled components libaries
For making Restful requests, I have made use of Axios for the web-api project and 'fetch' for the micro-service project

There were a lot of things going through my mind. But with the short time-frame, I managed to complete only few parts of the solution.
I couldn't add testings due to time constraints. However, I am willing to talk all about it in the discussion.

Feel free to ask queries, I will be happy to be the part of discussion.



