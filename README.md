# Docker-Compose NodeApp
Configuring a simple application using NodeJS as backend, MySQL as database and Nginx as a reverse proxy

### Technologies 💻🛠:
[![javascript](https://img.shields.io/static/v1?label=&message=Javascript&color=8A8100&style=flat&logo=JavaScript)](https://github.com/LucasLima337)
[![node](https://img.shields.io/static/v1?label=&message=NodeJS&color=094B00&style=flat&logo=node.js)](https://github.com/LucasLima337)
[![yarn](https://img.shields.io/static/v1?label=&message=Yarn&color=000000&style=flat&logo=Yarn)](https://github.com/LucasLima337)

[![mysql](https://img.shields.io/static/v1?label=&message=MySQL&color=0E1128&style=flat&logo=MySQL)](https://github.com/LucasLima337)
[![nginx](https://img.shields.io/static/v1?label=&message=NGINX&color=009639&style=flat&logo=NGINX)](https://github.com/LucasLima337)

[![docker](https://img.shields.io/static/v1?label=&message=Docker&color=517A9E&style=flat&logo=Docker)](https://github.com/LucasLima337)
[![docker-compose](https://img.shields.io/static/v1?label=&message=Docker-Compose&color=517A9E&style=flat&logo=Docker)](https://github.com/LucasLima337)


### Requirements ⚙:
You need to have installed:
* Docker
* Docker-Compose

### How to Use:
1. Clone this repository
2. Then, create a folder named "mysql" in your root directory
3. Finally, you should run the following command: `docker-compose up -d --build`

Now, the application is up and running :)

### Purpose 💡:
> The purpose of this project is improve my understanding about docker concepts and how a reverse proxy works!

> Based on that, this simple node application can insert a random name into database and this data is shown in a web page.
> To access this web page, a reverse proxy (nginx) get this information for us.
> All this applications was wrapped by docker using container concepts.
