
<a name="readme-top"></a>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
    - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  <!-- - [Deployment](#triangular_flag_on_post-deployment) -->
- [👤 Author](#author)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
<!-- - [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ](#faq) -->
- [📝 License](#license)

# 📖 Hello_Rails_back_end <a name="about-project"></a>

By now you've used many different gems with Rails and this exercise will have you connect with react using rails Api.

## 🛠 Built With <a name="built-with"></a>
The Recipe App was built with:

- Ruby On Rails
- PostgreSQL

### Tech Stack <a name="tech-stack"></a>

<!-- <details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
  </ul>
</details> -->

  <ul>
    <li><a href="https://rubyonrails.org/">Rails</a></li>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
    <li><a href="https://getbootstrap.com/">Bootstrap</a></li>
    <li><a href="https://www.javascript.com/">JavaScript</a></li>
  </ul>

### Key Features <a name="key-features"></a>

- **Authentication**
- **Table Logic**

### Live Demo <a name="live-demo"></a>
Not Avaliable Now

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:
- Ruby 3.2.1 or later
- Rails 7.0 or later
- PostgreSQL

After installing Ruby, run the following command to install rails.-

```sh
 gem install rails
```
### Front End Information
[FrontEnd](https://github.com/girma336/hello-react-front-end.git)
Runs the app in the development mode.\
First run Rails server than run react server using `npm start`
Do yo want to run another port ? yes than you can open the above link
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

### Back End Information

[BackEnd](https://github.com:girma336/hello-rails-back-end.git)
Runs the app in the development mode.\
  `rails server`
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### Setup

- Clone this project on your local machine using the following command in your terminal:

- Make sure to add .env file on your root directory and setup your .env file with your postgres username and password!

```sh
  git clone https://github.com:girma336/hello-react-front-end.git
  bundle install
  rails s
```

### Install

Run the following command to install all project's dependencies:

```sh
  cd recipe-app
  bundle install
  node install
```

### Running the app

rails db:create:all
rails db:migrate
rails db:seed ### to populate the database with some sample data.
rails s ## to start the server.
http://localhost:3000 ## app link in the browser

### Usage

`bundle install`

Next setup your .env so that you can create your dbs. Then:

`rails db:create`

`rails db:migrate`

`rails db:seed`

`rails c` --> To run rails console

`rails s` --> To run rails server

### Run tests

- Make sure to add data to the test db or create dummy data on the test files inside rspec folder.

`bundle install`

`rspec spec`

## 👤 Author <a name="author"></a>

👤 **Girma Tarekegn**

- GitHub: [@girma336](https://github.com/girma336/)
- LinkedIn: [girma-tarekegn](https://linkedin.com/in/girma-tarekegn/)

## 🔭 Future Features <a name="future-features"></a>

- implement some UX improvements: include transitions and/or animations, etc.
- A decent desktop design for the webapp.
- Implement the left side menu to improve the navigability of the app

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/girma336/hello-react-front-end/issues/).

## ⭐️ Show your support <a name="support"></a>

If you like this project, kindly give it a star ⭐️

## 🙏 Acknowledgments <a name="acknowledgements"></a>

- [Microverse](https://www.microverse.org/) for providing the education that inspired this project.
- [RailsGuides](https://guides.rubyonrails.org/) for the excellent documentation on Ruby on Rails.

## 📝 License <a name="license"></a>
This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
