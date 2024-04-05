## Installation

```bash
$ npm install -g lerna
```

## Running the app

```bash
# frontend
$ npm run fe

# frontend
$ npm run be

# both run parallel
$ npm run both
```

# MonoRepo Demo Example

What is Monorepo or Mono-Repository architecture?
Mono-Repository or in short Monorepo is an architectural concept for managing your code. The purpose of this architecture is to bring all your projects or all the pieces of your project under a single repository. These projects or codes can be related or independent and can be owned by different teams. So the idea is, we don’t want to manage multiple repositories for all the projects but will manage just a single source of truth. Let’s talk about an example to make it more clear. Let’s say, we have developed a web application. It has a frontend application which will run in browser, is has a backend application which will run in server. For both of this projects, we have isolated repositories in github like the following:
https://github.com/user/fe-project
https://github.com/user/be-project
Now if we want to use monorepo architecture that means, we have a single github repo like:
https://github.com/user/our-project
and this repo will contain all our frontend and backend code like below:

![Logo](https://miro.medium.com/v2/resize:fit:630/format:webp/1*9TV8RGGa6l0QKq_X4AYsQw.png)

# Benefits of this architecture:

Let’s talk about a few benefits of this architecture.

1. Manages all the projects dependencies in a single package.json file.
2. Makes npm package publishing easier.
3. Sharing code withing isolated packages.
4. Single CI/CD workflow since it’s single repository.
5. It makes possible to define common rules for all projects.
6. Easy to refactor code.
7. Makes team collaboration better.

# Downsides of Monorepo:
The problem we may face with this architecture are:
1. Limitation to restrict access.
2. Git performs poorly if working on large-scale projects.
3. Build time gets higher.
4. Higher learning curve for new developer.