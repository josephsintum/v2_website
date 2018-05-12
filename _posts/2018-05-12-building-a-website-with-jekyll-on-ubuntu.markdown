---
layout: post
title:  "Easily build a website with Jekyll on Ubuntu"
date:   2018-05-12 15:18:56 +0530
categories: jekyll ubuntu
---

You might have been around the internet searching for a simple documentation on how to get started with Github Pages or blogging with Jekyll, or may be you just stumbled across this article, putting up at site is not always easy.

## What and why Jekyll

Jekyll is a simple, blog-aware, static site generator developed in Ruby. Static site generators differ from dynamic CMS such a wordpress or drupal and here's how. When a request is received wordpress gets a template and pull content from the database, then generates a page which is sent as the response while Jekyll sends back a static page. Jekyll sounds really simple right?

1. **Ease of use**. All you have to do is to write you articles in Markdown. If you can customize you pages with a simple template language liquid, HTML, CSS and JavaScript. No databases to manage or updates to install here.
2. **Fast**. All you pages are static and no database request to be made.
3. **Secure**. There are no dynamic pages which could be exploited to manipulate your server or configuration or even database with risk of database injections.
4. **Scalable**. It is easy serving static files across a server cluster unlike wordpress, which you have to deal with multiple database servers which increases the complexity.
5. **Version Control**. All you have to put up with are files which can be versioned with an SCM like Git**. No database backups.
6. **GitHub native support**. You can build and host a free website with Github Pages and it would.

### Requirements

Ubuntu 16.04 or higher

Internet connection

Cup of coffee(optional)

## Installation

Open you terminal and run

``` shell
sudo apt install jekyll
```

That's it you are done (Note: You don't need to have Ruby installed). 

Run 

``` shell
jekyll --help
```

to see list of command.

Lets create your "first" Jekyll site in the terminal.

``` shell
jekyll new your-first-site
cd your-first-site
jekyll serve
```

Open you browser to http://localhost:4000