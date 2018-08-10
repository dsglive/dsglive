# DSGLive Official Repository

## Built With Laravel + [Vuetified](https://github.com/codeitlikemiley/vuetified) (Real Time App)

# Table of Contents

1.  [Requirements](#requirements)
2.  [Installation](#installation)
3.  [Stacks Used](#stacks-used)
4.  [Plugins](#plugins)
5.  [Theme](#theme)
6.  [Initial State](#initial-state)
7.  [Linting](#linting)
8.  [Issues](#issues)
9.  [Pull Request](#pull-request)

## Server Requirements

- PHP 7.2+
- Composer
- Node JS
- NPM/Yarn
- Webpack
- Redis
- NGINX
- Supervisord
- Beanstalkd

## VS Code Settings (Laravel/Vue - Auto Lint and Fix)

- install Vs code plugin "Settings Sync" or `ctrl + shift + x`
- press: `ctrl + shift + P`
- search/type: `Sync: Advance Option`
- Choose: `Download Settings From Public Gist`
- Enter Gist ID: `bb232eb1abd0734a815b658a91b9cba5`
- Additional Installation:
  - [PHPCS](https://github.com/squizlabs/PHP_CodeSniffer)

## Installation

1.  `git clone https://github.com/dsglive/dsglive dsglive`
2.  `cd dsglive`
3.  `composer install`
4.  `yarn`
5.  `cp env.example .env`
6.  `php artisan echo:generate`
7.  set your `.env`

- If you want to use Laravel echo then change this to true

```
ECHO_ON=false
```

8.  `php artisan migrate:fresh --seed`
9.  node websocket
10. Serve Your Site (Locally)
    - @laravel valet - `valet link`
    - @laradock - `docker-compose up -d nginx redis mysql beanstalkd`
    - @homestead - `homestead up`
      [dsglive.test/](dsglive.test)
11. `php artisan horizon`

- Note For Production , You need to configure supervisord to execute the command for horizon/echo , so in event of server failure or restart that command will automatically run.

## Stacks Used

- Laravel 5.6
- Vue 2.5+
- Laravel Passport
- [Vuetified](https://github.com/codeitlikemiley/vuetified) for UI (User Interface)
- Laravel Echo for real-time broadcasting of events
- Laravel Horizon for queueing jobs

## Issues & Feature Request

- You can contact [me](https://www.facebook.com/uriah.san) at facebook.
- If you have seen any bugs please report it by making an [issue](https://github.com/dsglive/dsglive/issues).
